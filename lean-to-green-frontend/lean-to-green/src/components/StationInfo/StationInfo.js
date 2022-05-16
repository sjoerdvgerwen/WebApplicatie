import React, { useState, useEffect } from 'react';
import styles from './stationstyles.css';
import { GetStationDetails } from '../../api';
import { GetComments } from '../../api';

function StationInfo(data) {

  const [commentContent, setComment] = useState();
  const [userId, setUserId] = useState();
  const [stationDetails, setStationDetails] = useState();
  const [comments, setComments] = useState();

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=");
  };

  var id = data.data?.match?.params?.id
  var type = data.data?.match?.params?.type

  useEffect(() => {
    setUserId(sessionStorage.getItem('id'))
    GetStationDetails(type, id).then((res) => {
      setStationDetails(res);
    });
    GetComments(id).then((res) => {
      setComments(res);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://localhost:5001/api/comment/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        "StationId": id,
        "UserId": userId,
        commentContent
      })
    });
    const content = await response.json();
  }

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/mdb.min.css" rel="stylesheet" />
        <link href="css/style.min.css" rel="stylesheet" />
      </head>
      <body>
        <main class="mt-5 pt-4">
          <div class="container dark-grey-text mt-5">
            <div class="row wow fadeIn">
              <div class="col-md-6 mb-4">
                <img src={stationDetails?.result.photo} class="img-fluid" alt="" />
              </div>
              <div class="col-md-6 mb-4">
                <div class="p-4">
                  <p class="lead">
                    <h2><b>{stationDetails?.result.name}</b></h2>
                    <button class="button button-primary" onSubmit={showInMapClicked} type="submit" />Get directions
                  </p>
                  <p class="lead font-weight-bold">€ {stationDetails?.result.price} / KG</p>
                  <p>{stationDetails?.result.address}</p>
                  {sessionStorage.getItem('isLogged') === 'true' ?
                    <form onSubmit={submit} class="d-flex justify-content-left">
                      <input type="text" aria-label="Search" placeholder="Your comment..." class="form-control" onChange={e => setComment(e.target.value)} />
                      <button class="button button-primary" type="submit">send comment
                      </button>
                    </form> : <b>Log in om te reageren!</b>}
                </div>
              </div>
            </div>
          </div>
        </main>

        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/popper.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/mdb.min.js"></script>
        <script type="text/javascript">
        </script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              {comments?.map((comment) => {
                return <div class="media g-mb-30 media-comment">
                  <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div class="g-mb-15">
                      <h5 class="h5 g-color-gray-dark-v1 mb-0">{comment.user.username}</h5>
                      <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
                    </div>
                    <p>{comment.commentContent}</p>
                    <ul class="list-inline d-sm-flex my-0">
                      <li class="list-inline-item g-mr-20">
                        <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                          4
                        </a>
                      </li>
                      <li class="list-inline-item g-mr-20">
                        <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                          <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                          1
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              })}</div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default StationInfo
