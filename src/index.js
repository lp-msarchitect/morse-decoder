const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let letter = "";
  let decodeMessage = "";
  lettersCount = (expr.length / 10) >> 0;
  for (let i = 0; i < lettersCount; i++) {
    let codeLetter = expr.slice(i * 10, (i + 1) * 10);
    if (codeLetter === "**********") {
      letter = " ";
    } else {
      let morzeKey = "";
      for (let j = 0; j < codeLetter.length; j = j + 2) {
        if (codeLetter[j] + codeLetter[j + 1] === "10") {
          morzeKey += ".";
        }
        if (codeLetter[j] + codeLetter[j + 1] === "11") {
          morzeKey += "-";
        }
      }
      letter = MORSE_TABLE[morzeKey];
    }
    decodeMessage += letter;
  }
  return decodeMessage;
}

module.exports = {
  decode
};
