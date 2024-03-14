import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageAppBody from './MessageAppBody';

describe('MessageAppBody Component', () => {
  test('renders the connect wallet button', () => {
    render(<MessageAppBody connectWallet={() => {}} 
    readMessage={() => {}} 
    writeMessage={() => {}} 
    currentMessage="" newMessage="" 
    setNewMessage={() => {}} 
    accounts={[]} />);
    const connectWalletButton = screen.getByRole('button', { name: /connect wallet/i });
    expect(connectWalletButton).toBeInTheDocument();
  });
});
