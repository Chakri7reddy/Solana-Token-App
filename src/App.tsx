import React, { useEffect, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import WalletInfo from './components/WalletInfo';
import TokenCreator from './components/TokenCreator';
import TokenMinter from './components/TokenMinter';
import TokenSender from './components/TokenSender';
import TransactionHistory from './components/TransactionHistory';
import { listenForTokenTransfers } from './utils/solanaEvents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useWallet } from '@solana/wallet-adapter-react';

const App: React.FC = () => {
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  const connection = useMemo(() => new Connection(endpoint, 'confirmed'), [endpoint]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      listenForTokenTransfers(connection, publicKey, () => {
        console.log('🔄 Token balance updated');
      });
    }
  }, [publicKey, connection]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="App">
            <h1>🛑Solana Token App</h1>
            <WalletMultiButton className="wallet-button" />
            <WalletInfo />
            <TokenCreator />
            <TokenMinter />
            <TokenSender />
            <TransactionHistory />
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
