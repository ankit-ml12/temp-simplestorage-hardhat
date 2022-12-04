require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./tasks/block-number');
require('hardhat-gas-reporter')

// require('@nomiclabs/hardhat-etherscan')
const PRIVATE_KEY= process.env.GOERLI_PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCANE_API_KEY = process.env.ETHERSCANE_API_KEY
const COIN_MARKET_API_KEY = process.env.COIN_MARKET_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.7",
  networks:{
    goerli:{
      url: GOERLI_RPC_URL, // got from alchemy
      accounts:[PRIVATE_KEY], // from wallet
      chainId: 5, // search on google for your network
    },
    localhost:{
      url: "http://127.0.0.1:8545/", // get from hardhat command
      // account don't need to provide :) thanks hardhat
      chainId: 31337, // search on google for your network
    }
  },
  etherscan:{
    apiKey:ETHERSCANE_API_KEY, 
 },
 gasReporter:{
  enabled: true,
  outputFile: "gas-report.txt",
  noColors: true,
  currency: "USD",
  coinmarketcap: COIN_MARKET_API_KEY,
  //// token : use for other network 
// sign up https://pro.coinmarketcap.com/account/
// to get api to convert gas into dollar
// 1e1c69f1-3947-46cb-951f-e7d587cf22f0
}
};