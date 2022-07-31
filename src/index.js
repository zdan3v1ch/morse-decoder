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

function decode(expr) {
    let kek = [];
    for (i = 0; i< expr.length/10; i++){

        kek.push(expr.slice(i*10,10*(i+1)))
    }
    let newMass = [];
    kek.forEach((val) => {
        let str ="";
        for (i =0; i<val.length; i = i+2) {
            if (val[i] == 1 && val[i+1] == 0) {
                str += '.'
            } else {
                if (val[i] == 1 && val[i+1] == 1){
                    str += '-'
                } else {
                    if (val[i] == "*"){
                        str += '*'
                        
                    }
                }
            }
            
        }
        newMass.push(str)
    });
    

    let itogo = newMass.map(elem => MORSE_TABLE[elem])
//arr.map(element => MORSE_TABLE[element])
// newMass.map(elem = MORSE_TABLE[elem])
for (i = 0; i< itogo.length; i++) {
if (itogo[i] == undefined) {
    itogo[i] = " "
}
}
return itogo.join("")
}

module.exports = {
    decode
}


decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010")


