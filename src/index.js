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

function decode(expr) {
    const MORSE_TABLE_BINARY = {};
    for (const key in MORSE_TABLE) {

        const arrayKey = key.split('');
        for (let i = 0; i < 10; i++) {
            if (arrayKey.length < 10) {
                arrayKey.unshift('0');
            }
        }

        let middleString = '';
        arrayKey.forEach(el => {
            if (el === '.') {
                middleString += '10';
            } else if (el === '-') {
                middleString += '11';
            } else {
                middleString += '0';
            }
        })

        let correctString = '';
        if (middleString.length > 10) {
            correctString = middleString.slice(middleString.length - 10, middleString.length);
            MORSE_TABLE_BINARY[correctString] = MORSE_TABLE[key];
        } else {
            MORSE_TABLE_BINARY[middleString] = MORSE_TABLE[key];
        }
    }

    const decodedArray = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        const res = expr.slice(i, i + 10);
        if (res == '**********') {
            decodedArray.push(' ');
        } else {
            decodedArray.push(res);
        }
    }

    let result = '';
    decodedArray.forEach(element => {
        for (const key in MORSE_TABLE_BINARY) {
            if (element == key) {
                result += MORSE_TABLE_BINARY[key];
            }
        }
        if (element == ' ') {
            result += ' ';
        }
    })

    return result;
}

module.exports = {
    decode
}