const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decodeLetter(str) {
    if (str === '**********') {
        return ' ';
    }
    const arr = [];
    for (let i = 0; i <= str.length / 2; i++) {
        switch (str.slice(i * 2, i * 2 + 2)) {
            case '10':
                arr.push('.');
                break;
            case '11':
                arr.push('-');
                break;
        }
    }
    return MORSE_TABLE[arr.join('')];
}

function decode(expr) {
    // write your solution here
    const arr = [];
    for (let i = 0; i <= expr.length / 10; i++) {
        const letter = decodeLetter(expr.slice(i * 10, i * 10 + 10));
        arr.push(letter);
    }
    return arr.join('');
}

module.exports = {
    decode
}
