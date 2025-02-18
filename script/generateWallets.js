const web3 = new Web3('https://eth.llamarpc.com');

export function batchWalletsGen() {
    const amountOfWallets = document.getElementById('wallets-amount').value;

    web3.eth.accounts.wallet.clear();
    let wallets = web3.eth.accounts.wallet.create(amountOfWallets);

    let keys = {};

    for (let i = 0; i < wallets.length; i++) {
        let wallet = wallets[i];
        keys[wallet.address] = wallet.privateKey;
    };

    let publicKeys = "";
    let privateKeys = "";

    for (let pub in keys) {
        publicKeys += `${pub}\n`;
        privateKeys += `${keys[pub]}\n`;
    };

    document.getElementById("public-key-results").innerText = publicKeys;
    document.getElementById("private-key-results").innerText = privateKeys;
};

export function uniqueStartWithWalletsGen () {
    const startWithSymbols = document.getElementById('startwith-input').value;

    web3.eth.accounts.wallet.clear();
    let wallet = web3.eth.accounts.wallet.create(1);

    let walletCount = 1;

    function generateWallet() {
        if (wallet[0].address.includes(startWithSymbols)) {
            document.getElementById('unique-wallet-address').innerText = wallet[0].address;
            document.getElementById('unique-wallet-private-key').innerHTML = `Private Key: <br> ${wallet[0].privateKey}`;

            document.getElementById('generated-wallets-number').innerHTML = `Finished! <br> Wallets generated: ${walletCount}`;
        } else {
            web3.eth.accounts.wallet.clear();
            wallet = web3.eth.accounts.wallet.create(1);
            walletCount++;

            document.getElementById('generated-wallets-number').innerText = `Wallets generated: ${walletCount}`;

            setTimeout(generateWallet, 0.0005);
        }
    }

    generateWallet();
};
