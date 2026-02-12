const messages = [
    "EI?",
    "EI ERAM KORBI AMR SATHE??",
    "EI 🥹?",
    "🥹🥹🥹🥹 erm korte parbi...",
    "ill be good boy 🥹🥹!",
    "kuchupuchu... 🥹🥹🥹...",
    "Ami kintu kadbo...",
    "Ami kintu ebr onek kadbo...",
    "ACHA EBR AMI KADCHI AR JIGGESH HI KORBONA...",
    "Just kidding, say yes pleaseeeeeeeee! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";

}
