const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let decode =expr=>{
const space = "**********";
let countLetters = expr.length/10;
let results = '';

for (j =0 ;j<countLetters;j++){
    let letter =expr.substr(10*j,10);
    results += (letter === space) ?' ' : getLetters(letter);
}
return results;
}
let getLetters = expr=> {
    let results = "";
    for (let i=0;i < 5;i++) {
        let val = expr.substr(2*i, 2);
        results += (val === "00") ? '' : val === "10" ? '.' : '-';
    }
    return MORSE_TABLE[results];
}


module.exports = {
    decode
}