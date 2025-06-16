# Gamify Life

This repository contains a minimal skeleton for the **Gamify Life** MVP. It combines a Web3 enabled social application with gamified self‑mastery mechanics and DAO governance.

## Structure

- `frontend/` – Next.js application with wallet connection and a simple XP tracker.
- `contracts/` – Hardhat project containing the `GameCoin` ERC‑20 token and a basic `GamifyGovernor` contract.

## Getting Started

### Frontend

Install dependencies and run the development server:

```bash
cd frontend
npm install
npm run dev
```

The home page allows wallet connection via MetaMask and includes a placeholder XP tracker.

### Smart Contracts

To deploy contracts to Polygon Mumbai using Hardhat:

```bash
cd contracts
npm install
npx hardhat run scripts/deploy.js --network mumbai
```

Set the `DEPLOYER_KEY` environment variable with your private key before deploying.

## Notes

This project is an early prototype and many features are left to implement:

- Persisting XP to Supabase or Firebase
- Converting XP to `GCN`
- DAO proposal and voting UI
- Social media style feeds and content uploads

Contributions and ideas are welcome!
