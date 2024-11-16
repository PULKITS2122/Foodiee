import React, { useState } from 'react';

const InputSection = ({ onSendMessage }) => {
    const [value, setValue] = useState("");

    const handleSend = () => {
        if (value.trim()) {
            onSendMessage(value, "right");
            setValue("");
        }
    };

    return (
        <div className="input-section">
            <textarea
                placeholder="Type your message..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default InputSection;
