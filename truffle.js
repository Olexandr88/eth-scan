const register = require('@babel/register');
register({
  extensions: ['.ts']
});

const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC_PHRASE = process.env.SECRET;
const INFURA_PROJECT_ID = 'bfea47cc97c440a687c8762553739a94';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    conduit: {
      provider: function() {
        return new HDWalletProvider(
          ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
          "https://rpc-disturbed-tan-dog-5lsohdtmas.t.conduit.xyz")
      },
      network_id: 888,
      gas: 10000000,
      gasPrice: 1000000000,
      skipDryRun: false
    },

    ropsten: {
      provider: () =>
        new HDWalletProvider(MNEMONIC_PHRASE, `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: '3',
      gas: 5500000,
      gasPrice: 5000000000
    },

    live: {
      provider: () =>
        new HDWalletProvider(MNEMONIC_PHRASE, `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: '1',
      gas: 5500000,
      timeoutBlocks: 200,
      gasPrice: 5000000000
    }
  },

  compilers: {
    solc: {
      version: '0.6.4'
    }
  }
};
