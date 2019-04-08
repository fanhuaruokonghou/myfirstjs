//通过助记词方式创建钱包账户
const ethers1 = require("ethers");
const rand = ethers1.utils.randomBytes(16);
const mnemonic = ethers1.utils.HDNode.entropyToMnemonic(rand);

const path = "m/44'/60'/0'/0/0";
console.log(ethers1.Wallet.fromMnemonic(mnemonic, path));

//导出keystore
const json = {
    "address": "856e604698f79cef417aab...",
    "crypto": {
        "cipher": "aes-128-ctr",
        "ciphertext": "13a3ad2135bef1ff228e399dfc8d7757eb4bb1a81d1b31....",
        "cipherparams": {
            "iv": "92e7468e8625653f85322fb3c..."
        },
        "kdf": "scrypt",
        "kdfparams": {
            "dklen": 32,
            "n": 262144,
            "p": 1,
            "r": 8,
            "salt": "3ca198ce53513ce01bd651aee54b16b6a...."
        },
        "mac": "10423d837830594c18a91097d09b7f2316..."
    },
    "id": "5346bac5-0a6f-4ac6-baba-e2f3ad464f3f",
    "version": 3
};

// 导入keystore Json
ethers1.Wallet.fromEncryptedJson(json, password, [progressCallback]).then(function(wallet) {
    // wallet
});

// 使用钱包对象 导出keystore Json
const wallet = new ethers1.Wallet();
wallet.encrypt(pwd, [progressCallback].then(function(json) {
    // 保存json
});

