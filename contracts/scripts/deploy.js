const hre = require('hardhat')

async function main() {
  const [deployer] = await hre.ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)

  const GameCoin = await hre.ethers.getContractFactory('GameCoin')
  const gameCoin = await GameCoin.deploy(hre.ethers.utils.parseEther('1000000'))
  await gameCoin.deployed()
  console.log('GameCoin deployed to:', gameCoin.address)

  const Governor = await hre.ethers.getContractFactory('GamifyGovernor')
  const governor = await Governor.deploy(gameCoin.address)
  await governor.deployed()
  console.log('Governor deployed to:', governor.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
