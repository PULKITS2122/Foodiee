import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Header from './Header';
import InputSection from './InputSection';
import MessageSection from './MessageSection';

const socket = io('http://localhost:3001');

const ChatbotComponent = () => {
    const [messages, setMessages] = useState([]);

    const greetingMessage = {
        id: Date.now(),
        info: "Hey, How can I assist you today? Let's cook something...",
        type: "left",
        name: "Foodiee",
    };

    useEffect(() => {
        socket.on('bot-message', handleBotMessage);
        return () => {
            socket.off('bot-message', handleBotMessage);
        };
    }, [handleBotMessage]);

    const handleBotMessage = (data) => {
        const newBotMessage = createMessage(data, "left", "Foodiee");
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    };

    const addMessage = (info, type) => {
        const newUserMessage = createMessage(info, type, "User");
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        socket.emit('client message', info);
    };

    const createMessage = (info, type, name) => {
        const date = new Date();
        const formattedTime = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        return {
            id: Date.now(),
            info,
            date: formattedTime,
            type,
            name,
        };
    };

    return (
        <div className="chatbot-container">
            <Header />
            <MessageSection messages={messages} />
            <InputSection onSendMessage={addMessage} />
        </div>
    );
};

export default ChatbotComponent;
