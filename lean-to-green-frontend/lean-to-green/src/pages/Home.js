import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { GetMarkerDataAxios } from '../api';
import Header from '../components/Header/Header';
import Map from '../components/Map/Map';
import List from '../components/List/List';
import Chat from '../components/ChatInput/Chat'
import Footer from '../components/Footer/Footer';

const Home = (name) => {
    const [places, setPlaces] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('Hydrogen');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        setIsLoading(true);
        GetMarkerDataAxios(type).then((data) => {
            setPlaces(data);
            setIsLoading(false);
        })
    }, [type]);

    return (
        <>
            <Header name={name} />
            <CssBaseline />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked} />
                </Grid>
            </Grid>
            <Chat name={name} />
            <Footer />
        </>
    );
}

export default Home;