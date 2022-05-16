import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import styles from '../ChatRoom/ChatRoom.css';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chat = (data) => {
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    
    latestChat.current = chat;

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/chat')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveMessage', message => {
                    const updatedChat = [...latestChat.current];
                    updatedChat.push(message);
                
                    setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);
    
    const sendMessage = async (user, message) => {
        const chatMessage = {
            user : user,
            message: message
        };

        try {
            await  fetch('https://localhost:5001/chat/messages', { 
                method: 'POST', 
                body: JSON.stringify(chatMessage),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }

    return (
        <div>
            <div className="background">
                    <div className="chat-text">
                        <h1>Maak duurzaamheid bespreekbaar!</h1>
                        <p>Bespreek jou mening over duurzaamheid met mede gebruikers!</p>
                    </div>
                    <div class="chat-container">
                        <header class="chat-header">
                            <h1><i class="fas fa-smile"></i> ChatCord</h1>
                        </header>
                        <main class="chat-main">
                            <div class="chat-sidebar">
                            </div>
                            <div class="chat-messages">
                            <ChatWindow chat={chat}/>
                            </div>
                        </main>
                        <div class="chat-form-container">
                            
                            <ChatInput sendMessage={sendMessage} data={data}/>
                                
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Chat;