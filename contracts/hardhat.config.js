require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  solidity: '0.8.18',
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.DEPLOYER_KEY].filter(Boolean),
    },
  },
}
