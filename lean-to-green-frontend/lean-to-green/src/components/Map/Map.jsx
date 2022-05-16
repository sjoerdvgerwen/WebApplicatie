import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles';

const Map = (data) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');

    let component;
    
    if(typeof data.places.length === 'undefined'){
        component = <p>array is nog leeg.</p>
    }
    else {
        component = 
        data.places?.map((place, i) => (
                <div
                className={classes.markerContainer}
                lat={place.latitude}
                lng={place.longitude}
                key={i}>
                    {
                        !isDesktop ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                className={classes.pointer}
                                src={place.photo ? place.photo : 'https://www.denhartogbv.com/wp-content/uploads/2019/02/Esso-Van-Esch-Moergestel-3.jpg'}
                                />
                                </Paper>
                        )
                    }  
                </div>
            ))      
        }    
             
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDisJSMpPmLNg9scc5HksH3G8YYG8x28DY'}}
            defaultCenter={data.coordinates}
            center={data.coordinates}
            defaultZoom={10}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={(child) => data.setChildClicked(child)}>
                {component}
            </GoogleMapReact>
        </div>
    );
}

export default Map;