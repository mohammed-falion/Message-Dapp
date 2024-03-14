const writeMessage = async (newMessage: string, messageContract: any, accounts: string[], readMessage: () => Promise<void>) => {
    if (!messageContract || accounts.length === 0) return;
    try {
      await messageContract.methods.setMessage(newMessage).send({ from: accounts[0] });
      console.log('Message updated successfully.');
      await readMessage(); // Assuming readMessage function is adapted to be called without arguments
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  export default writeMessage;
  