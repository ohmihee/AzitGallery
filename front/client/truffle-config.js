const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateKey =
  "0x97fb5a14f64d2d0e7791b7cce82fe58ed340c0400ee816956797b4d00b45730d"; // Enter your private key;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          "https://kaikas.baobab.klaytn.net:8651/"
        ),
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: "8500000",
      gasPrice: null,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(privateKey, "https://your.cypress.en.url:8651"),
      network_id: "8217", //Klaytn mainnet's network id
      gas: "8500000",
      gasPrice: null,
    },
  },
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
};
