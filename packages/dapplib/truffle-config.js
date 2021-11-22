require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind concert gesture nation fresh sunset'; 
let testAccounts = [
"0x268a9f2e4b7159dcd76fc81abf90e66371e0e5be81d815a4f2240565b717ac37",
"0x6a5a04b8f5bca34ad4e484ed3026fdd735bffb7db131de30bf8f3e75a358678d",
"0x563f034b0f6d9006a0df19154b857f897a3f821885692d3d4ef1a0ffeec2af1e",
"0x5bc019fc93400fcbbcd8cc1a0700a603426aa4492f4ae873a7949d671bfc0a46",
"0xb78eaede15d62aedf30f3e99cae055036048c82db817a757898afd9d510bcca7",
"0x827f837b98a596da8f9dbff4a75a973a23c6794f1eb2157a1ea0fd0caf64e271",
"0xeb8be6915ffc0fc15cbbc80a0bb3ff581d4853a0be2b40f535f14aadbd8ee598",
"0xc932202016b2d6a909734df38e596424c594d5b06180ca63fae8a1281fa0c5a2",
"0xf5b6e8648c878ae218034f0aad57b7c5243655c2d3c9f35c398a40a9b2801a08",
"0xdf9c133c359d8f91ded86e8b6d62136eab9f3b59a5d5775a34c1ebec659afa24"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

