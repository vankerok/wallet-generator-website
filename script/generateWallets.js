// import Web3 from 'web3';


const web3 = new Web3('https://eth.llamarpc.com');

export function generateWallets() {
    console.log('Generating wallets..')
    const amountOfWallets = document.getElementById('wallets-amount').value;

    web3.eth.accounts.wallet.clear();
    let wallets = web3.eth.accounts.wallet.create(amountOfWallets);

    console.log(`Here are your wallets public keys: ${wallets[0].address} and private keys ${wallets[0].privateKey}`);
}