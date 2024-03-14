import React from 'react';
import './Style/MessageAppBody.css';

const MessageAppBody = ({
    connectWallet,
    readMessage,
    writeMessage,
    currentMessage,
    newMessage,
    setNewMessage,
    accounts,
}: {
    connectWallet: () => void,
    readMessage: () => void,
    writeMessage: (newMessage: string) => void,
    currentMessage: string,
    newMessage: string,
    setNewMessage: React.Dispatch<React.SetStateAction<string>>,
    accounts: string[]
}) => {
    return (
        <div className="message-app-body">
            <h1>NFT Message Contract Interaction</h1>
            <button onClick={connectWallet}>
                Connect Wallet {accounts.length > 0 && <span className="wallet-connected">&#10003;</span>}
            </button>
            <div className="massage">
                <button onClick={readMessage}>Read Current Message</button>
                <p>Current Message: {currentMessage}</p>
                <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Set new message"/>
                <button onClick={() => writeMessage(newMessage)} disabled={accounts.length === 0}>Set New Message</button>
            </div>
        </div>
    );
};

export default MessageAppBody;
