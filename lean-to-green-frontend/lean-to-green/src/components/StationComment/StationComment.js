import React, {useState, useEffect} from 'react'
import { GetComments } from '../../api/index';

function StationComment() {

    const [comments, setComments] = useState();  

    useEffect(() => {
        GetComments().then((res) => {
           setComments(res);
        })
    })
    return (
       <div>Deze gaat weg :(</div>
    )
}

export default StationComment
