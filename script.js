const MorseCodeLetters = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

function translateToMorse() {
    const input = document.getElementById("input1").value.toUpperCase();
    let output = "";
    for (let char of input) {
        output += MorseCodeLetters[char] || char;
        output += ' ';
    }
    document.getElementById("output").innerText = output.trim();
}

function translateToText() {
    const input = document.getElementById("input1").value.trim();
    const morseWords = input.split('   '); // Split Morse code by triple space to separate words
    let output = "";
    for (let morseWord of morseWords) {
        const morseChars = morseWord.split(' '); // Split each Morse word into Morse code symbols
        for (let morseChar of morseChars) {
            output += getKeyByValue(MorseCodeLetters, morseChar) || '';
        }
        output += ' '; // Add space between words
    }
    document.getElementById("output").innerText = output.trim();
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
