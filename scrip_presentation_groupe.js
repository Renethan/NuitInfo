var konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

var userInput = [];
var redirectUrl = './snake.html';

document.addEventListener('keydown', function(e) {
    userInput.push(e.key);

    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }

    if (userInput.length === konamiCode.length) {
        var isKonami = true;

        for (var i = 0; i < konamiCode.length; i++) {
            if (konamiCode[i] !== userInput[i]) {
                isKonami = false;
                break;
            }
        }

        if (isKonami) {
            window.location.href = redirectUrl;
        }
    }
});