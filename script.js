function speak() {
    const input = document.getElementById('input');
    const text = input.value;
    const ulterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(ulterance);
}