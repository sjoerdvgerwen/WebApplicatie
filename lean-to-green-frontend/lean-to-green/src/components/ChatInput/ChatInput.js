import React, { useState } from 'react';

const ChatInput = (props, data) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        }
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onMessageUpdate = (e) => {
        setUser(sessionStorage.getItem('name'));
        setMessage(e.target.value);
    }

    return (
        <form id="chat-form"
            onSubmit={onSubmit}>

            <label htmlFor="message">Message:</label>
            <br />
            <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={onMessageUpdate}
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;