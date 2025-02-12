// import Web3 from 'web3';


const web3 = new Web3('https://eth.llamarpc.com');

export function generateWallets() {
<<<<<<< HEAD
    // console.log('Generating wallets..')
=======
    console.log('Generating wallets..')
>>>>>>> c17e620a9a95192217326ff002913e7927886ebb
    const amountOfWallets = document.getElementById('wallets-amount').value;

    web3.eth.accounts.wallet.clear();
    let wallets = web3.eth.accounts.wallet.create(amountOfWallets);

<<<<<<< HEAD
    let keys = {};

    for (let i = 0; i < wallets.length; i++) {
        let wallet = wallets[i];
        keys[wallet.address] = wallet.privateKey;
    }

    let publicKeys = "";
    let privateKeys = "";

    for (let pub in keys) {
        publicKeys += `${pub}\n`;
        privateKeys += `${keys[pub]}\n`;
    }

    document.getElementById("public-key-results").innerText = publicKeys;
    document.getElementById("private-key-results").innerText = privateKeys;

    // console.log(`Here are your wallets public keys: ${wallets[0].address} and private keys ${wallets[0].privateKey}`);
=======
    console.log(`Here are your wallets public keys: ${wallets[0].address} and private keys ${wallets[0].privateKey}`);
>>>>>>> c17e620a9a95192217326ff002913e7927886ebb
}