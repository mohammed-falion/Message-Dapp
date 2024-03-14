import Web3 from 'web3';

const connectWallet = async (setAccounts: React.Dispatch<React.SetStateAction<string[]>>, 
  setWeb3: React.Dispatch<React.SetStateAction<Web3 | null>>, 
  setMessageContract: React.Dispatch<React.SetStateAction<any>>, contractABI: any[], contractAddress: string) => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(accounts);
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      setMessageContract(contractInstance);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  } else {
    console.log('Please install MetaMask.');
  }
};

export default connectWallet;
