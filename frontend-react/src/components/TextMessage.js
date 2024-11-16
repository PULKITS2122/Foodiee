import React from 'react';

const TextMessage = ({ message }) => {
    const { info, date, type, name } = message;
    const messageClass = type === 'right' ? 'message-right' : 'message-left';

    return (
        <div className={`message ${messageClass}`}>
            <div className="message-header">
                <span>{name}</span>
                <span className="message-time">{date}</span>
            </div>
            <div className="message-content">{info}</div>
        </div>
    );
};

export default TextMessage;
