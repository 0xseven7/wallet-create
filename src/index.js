const crypto = require("crypto");
const ethers = require("ethers");
const bip39 = require("bip39");
function generateWallet() {
  const id = crypto.randomBytes(32).toString("hex");
  const privateKey = "0x" + id;
  const wallet = new ethers.Wallet(privateKey);
  console.log("address: ", wallet.address);
  console.log("privateKey: ", privateKey);
}
function mnemonics() {
  const m = bip39.generateMnemonic();
  console.log(m);
}

module.exports = function () {
  const args = process.argv;
  if (args[2] === "wallet") {
    generateWallet();
  } else {
    mnemonics();
  }
}();
