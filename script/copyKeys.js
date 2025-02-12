document.querySelectorAll(".copy-button").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent
        .trim()
        .replace(/(0x)(?=[a-fA-F0-9]{40})/g, "\n0x");

        navigator.clipboard.writeText(textToCopy).then(() => {
            const label = copyButton.querySelector(".copy-label");

            copyButton.disabled = true;
            label.textContent = "Copied!";

            setTimeout(() => {
                copyButton.disabled = false;
                label.textContent = "Copy";
            }, 1000);
        });
    })
});