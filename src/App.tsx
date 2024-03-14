import React, { useState } from 'react';
import Web3 from 'web3';
import MessageContractABI from './API/MessageContractABI.json';
import connectWallet from './System/connectWallet';
import readMessage from './System/readMessage';
import writeMessage from './System/writeMessage';
import MessageAppBody from './MessageAppBody';

const contractAddress = '0x70d4612786F2A025E987823798ce1f249581d8e4';

const App: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [messageContract, setMessageContract] = useState<any>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');

  const handleConnectWallet = () => connectWallet(setAccounts, setWeb3, setMessageContract, MessageContractABI, contractAddress);
  const handleReadMessage = () => readMessage(messageContract, setCurrentMessage);
  const handleWriteMessage = (newMessage: string) => writeMessage(newMessage, messageContract, accounts, () => handleReadMessage());

  return (
    <MessageAppBody
      connectWallet={handleConnectWallet}
      readMessage={handleReadMessage}
      writeMessage={handleWriteMessage}
      currentMessage={currentMessage}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      accounts={accounts}
    />
  );
};

export default App;
