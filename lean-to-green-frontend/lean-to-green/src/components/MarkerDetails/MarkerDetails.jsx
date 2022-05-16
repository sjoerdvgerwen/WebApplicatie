import { React, useState} from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EuroIcon from '@mui/icons-material/Euro';
import useStyles from './styles';
import { Redirect } from "react-router";
import { Station } from '../../pages/Station';

const MarkerDetails = (data) => {
    const classes = useStyles();

    const [id, setId] = useState();
    const [redirect, setRedirect] = useState();
    const [type, setType] = useState();

    const getStationInfo = async () => {
        setRedirect(true)
        setId(data.place.id)
        setType(data.type)
    }

    if (redirect) {
        return <Redirect to={{
            pathname: '/station/' + type + "/" + id
        }}
        />;
    }

    if(data?.selected) data.refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"
})

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350}}
                image={data.place.photo ? data.place.photo : 'https://www.denhartogbv.com/wp-content/uploads/2019/02/Esso-Van-Esch-Moergestel-3.jpg'}
                title={data.place.name}/>

                <CardContent>
                    {data.place?.name && (
                        <Typography gutterBottom variant="h5" className={classes.subtitle}>{data.place.name}
                        <button className={classes.search} onClick={getStationInfo}>details</button>
                        </Typography>
                    )}
                    {data.place?.price && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <EuroIcon /> {data.place.price}
                        </Typography>
                    )}

                    {data.place?.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {data.place.address}
                        </Typography>
                    )}
                </CardContent>
            </Card>

    );
}

export default MarkerDetails;