require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain equip hover arch off soon'; 
let testAccounts = [
"0xb72dcceb9d38f81ab0a6bfa5eb5f6b187c58f7e01e5161488b65957f447ddecc",
"0x34494106facae86a0e0f6a0ceabfff7d1c9f61397dd0a174cba2ad87d6361c2b",
"0xbba91e6d6fcbb92d7892564d921c85ed96b5345e11bb48e844dcd6d7a3d11efe",
"0xb25326dcab54662cfd3ac7285f4c63ed1d3c266d6b7f13581151059d6e1fc505",
"0x2859fc4cb7e8b4611bd4ee7a8a3f609e20d1ab53dae9bf46531ff760e99a7325",
"0xd057f55faa55baad870e91a4aa9569fb43481d51ee9183f4e3286951d910a59c",
"0x68faba5ea9f004c2ba6396c5daee00d7f960e7a8c11d8b7d1da98dcefb2f60d9",
"0x7555f23fee6fbaf579e42adeb77061dcf100250a8f9b31ae32bed1051a28ed1b",
"0xb10729e7f000f513b9296dd79651412eda0bdef5df8b2db266ac0c23eedf5dab",
"0xcc63e7e1e92f6a032615bc6fab780b87366a8953dc51ab410c5871e3a1c6acfc"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
