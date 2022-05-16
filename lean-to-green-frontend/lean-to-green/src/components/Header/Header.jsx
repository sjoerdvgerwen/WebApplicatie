import React, { useState } from 'react';
import { Redirect } from "react-router";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import useStyles from './styles';

const Header = ({ name, setName }) => {
    const classes = useStyles();
    const [redirect, setRedirect] = useState();

    const history = useHistory();
    const routeChange = () => {
        let path = `logon`;
        history.push(path);
    }

    const logout = async () => {
        await fetch('https://localhost:5001/api/user/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        setName = ('');
        sessionStorage.setItem('isLogged', 'false');
        setRedirect(true);
    }

    let menu;
    if (sessionStorage.getItem('isLogged') !== 'true') {
        menu = (
            <button className={classes.search} onClick={routeChange}>Login</button>
        )
    } else {
        menu = (
            <button className={classes.search} onClick={logout}>Logout</button>
        )
    }

    if (redirect) {
        return <Redirect to="/profile" />;
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    <img src="/img/Logo_white.png"></img>
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    {menu}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;