require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

let PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9",
  networks: {
    lukso: {
      live: true,
      url: `https://rpc.l16.lukso.network`,
      chainId: 2828,
      accounts: [PRIVATE_KEY],
    },
  },
};
