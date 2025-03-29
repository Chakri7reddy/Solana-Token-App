# Solana Token App

![Solana Logo](https://solana.com/src/img/branding/solanaLogoMark.svg)

## Overview
A modern web application for interacting with the Solana blockchain. Create, mint, and manage SPL tokens with ease through an intuitive interface.

## Features

### Wallet Integration
- 🔌 Connect with Phantom, Solflare, and other Solana wallets
- 📜 View wallet address and transaction history
- 🛑 Easy wallet disconnection

### Token Management
- 🪙 Create custom SPL tokens with metadata
- 🏗️ Mint tokens to your wallet
- 💸 Send tokens to any Solana address
- 📊 Track token balances in real-time

### User Experience
- 🎨 Clean, modern interface
- 📱 Fully responsive design
- 🔔 Transaction notifications
- 🚦 Error handling and validation

## Tech Stack

| Component       | Technology                          |
|-----------------|-------------------------------------|
| Framework       | Next.js                             |
| UI Library      | React.js                            |
| Styling         | Tailwind CSS                        |
| Blockchain      | Solana Web3.js                      |
| Token Standard  | SPL Token Program                   |
| Wallets         | Phantom, Solflare, Backpack         |
| Deployment      | Vercel                              |

## Getting Started

### Prerequisites
- Node.js v16 or later
- npm or yarn
- Solana wallet extension (Phantom recommended)

### Installation
```bash
## Clone the Repository
```sh
git clone https://github.com/AKSHAT-ARORA03/Solana-Token-App.git
cd Solana-Token-App
```

## Install Dependencies
```sh
npm install
```

## Start Development Server
```sh
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)

## Configuration
Create a `.env.local` file in the root directory with your configuration:

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com
```

## Deployment
### Vercel
Install Vercel CLI:
```sh
npm install -g vercel
```

Deploy:
```sh
vercel --prod
```

## Usage
### Connect Your Wallet
Use the button in the header to connect your wallet.

### Create a New Token
1. Navigate to "Create Token"
2. Enter token details (name, symbol, decimals)
3. Click "Create"

### Mint Tokens
1. Go to "My Tokens"
2. Select your token
3. Enter amount and click "Mint"

### Send Tokens
1. Select "Send Tokens"
2. Enter recipient address and amount
3. Confirm transaction

## Screenshots
- Dashboard
- Token Creation
- Transaction History

## Troubleshooting
### Wallet Connection Issues:
- Ensure your wallet extension is installed and unlocked
- Refresh the page and try again
- Check console for errors (`F12` in Chrome)

### Transaction Failures:
- Verify you have enough SOL for gas fees
- Check network connection
- Ensure you're on the correct network (Devnet)

## Contributing
1. Fork the repository
2. Create a feature branch:
   ```sh
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature
   ```
5. Open a Pull Request

## License
MIT License - See `LICENSE` for details.

## Support
For support, please:
- Open an issue
- Join our Discord server
- Email: akshataroa1299@gmail.com

## Acknowledgements
- Solana Labs for the amazing blockchain
- Phantom team for wallet integration
- The Web3 community for inspiration
