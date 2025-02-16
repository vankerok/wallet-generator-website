export function blurPrivateKeys () {
    const generatedPrivateKeys = document.getElementsByClassName('generated-private-keys')[0];
    const privateKeysOverlay = document.getElementsByClassName('private-keys-overlay')[0];

    privateKeysOverlay.style.display = 'flex';
    generatedPrivateKeys.classList.add('blurred');
};