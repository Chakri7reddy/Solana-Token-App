import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";

import WalletInfo from "./components/WalletInfo";
import TokenCreator from "./components/TokenCreator";
import TokenMinter from "./components/TokenMinter";
import TokenSender from "./components/TokenSender";
import TransactionHistory from "./components/TransactionHistory";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@solana/wallet-adapter-react-ui/styles.css"; 
import "./App.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const App = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Included wallets here
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {/* Multi Button  for wallet changing*/}
            <WalletMultiButton />
           <WalletDisconnectButton style={{ display: "block", margin: "15px auto 0", textAlign: "center" }} />
            {/* App Components */}
            <WalletInfo />
            <TokenCreator />
            <TokenMinter />
            <TokenSender />
            <TransactionHistory />

            {/* Toast  used for opo up messages */}
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
