import React, { useState, useEffect, createRef} from 'react';
import {Redirect } from 'react-router-dom';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import MarkerDetails from '../MarkerDetails/MarkerDetails'

import useStyles from './styles'

const List = (data) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);


    useEffect(() => {
        const refs = Array(data.places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
    }, [data.places])    
    
    let component;

    if(typeof data.places.length === 'undefined'){
        component = <p>array is nog leeg.</p>
    }
    else {
        component = <Grid container spacing={3} className={classes.list}>
             {data.places?.map((place, i) => (
                 <Grid ref={elRefs[i]} item key={i} xs={12}>
                    <MarkerDetails 
                    type={data.type}
                    place={place}
                    selected={Number(data.childClicked) == i}
                    refProp={elRefs[i]}
                    />
                 </Grid>
             ))}
         </Grid>
    }

    return (
     <div className={classes.container}>
         <Typography variant="h5">Chose your power-supply!</Typography>
         { data.isLoading? (
             <div className={classes.loading}>
                 <CircularProgress size="5rem" />
                 </div>
         ) : (
             <>
         <FormControl className={classes.formControl}>
             <InputLabel>Type</InputLabel>
             <Select value={data.type} onChange={(e) => data.setType(e.target.value)}>
                 <MenuItem value="hydrogen"> Hydrogen</MenuItem>
                 <MenuItem value="Electric"> Electric</MenuItem>
             </Select>
         </FormControl>
         {component}
         </>
         )}
     </div>
    );
}

export default List;