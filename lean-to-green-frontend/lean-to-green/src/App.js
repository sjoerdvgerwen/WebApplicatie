import React, { useState, useEffect } from 'react';
import Register from './pages/Register';
import Home from './pages/Home';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import simpleRestProvider from 'ra-data-simple-rest';
import Station from './pages/Station';

function App() {
    const [name, setName] = useState('');
    const [user, setUser] = useState();

    useEffect(() => {
        (
            async () => {
                const reponse = await fetch('https://localhost:5001/api/user/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
                const content = await reponse.json();
                sessionStorage.setItem('id', content.id);
                sessionStorage.setItem('name', content.username);
                setUser(content.isAdmin);
                setName(content.email);
            }
        )();
    });

    return (
        <BrowserRouter>
            <Route path="/station/:type/:id" exact component={Station} />
            <Route path="/admin" exact component={() => <Admin name={name} admin={user} />} />
            <Route path="/" exact component={() => <Home name={name} />} />
            <Route path="/profile" exact component={() => <Profile name={name} />} />
            <Route path="/register" component={Register} />
            <Route path="/logon" exact component={() => <Logon setName={setName} />} />
        </BrowserRouter>
    );
}

export default App;