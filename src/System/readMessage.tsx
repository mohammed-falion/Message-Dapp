const readMessage = async (messageContract: any, setCurrentMessage: React.Dispatch<React.SetStateAction<string>>) => {
    if (!messageContract) return;
    try {
      const message = await messageContract.methods.getMessage().call();
      setCurrentMessage(message);
    } catch (error) {
      console.error('Error reading message:', error);
    }
  };
  
  export default readMessage;
  