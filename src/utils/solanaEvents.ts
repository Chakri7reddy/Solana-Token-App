import { Connection, PublicKey } from '@solana/web3.js';

export const listenForTokenTransfers = (connection: Connection, walletAddress: PublicKey, callback: () => void) => {
  const tokenAccounts = async () => {
    const accounts = await connection.getTokenAccountsByOwner(walletAddress, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA') // SPL Token Program
    });

    accounts.value.forEach(({ pubkey }) => {
      connection.onAccountChange(pubkey, () => {
        console.log('🟢 Token balance updated!');
        callback(); // Refresh wallet info
      }, 'confirmed');
    });
  };

  tokenAccounts().catch(console.error);
};
// This function listens for token transfers related to the provided wallet address.
// It fetches all token accounts owned by the wallet and sets up listeners for changes in their balances.
// When a change is detected, it triggers the provided callback function to refresh wallet information.