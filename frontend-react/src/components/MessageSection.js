import React from 'react';
import TextMessage from './TextMessage';

const MessageSection = ({ messages }) => {
    return (
        <div className="message-section">
            {messages.map((msg) => (
                <TextMessage key={msg.id} message={msg} />
            ))}
        </div>
    );
};

export default MessageSection;
