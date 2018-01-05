const syllable = require('syllable');


export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  countSyllables(string1, string2, string3){
  const testArray = [];
  debugger;
  const syllableNum1 = syllable(string1.split(" "));
  const syllableNum2 = syllable(string2.split(" "));
  const syllableNum3 = syllable(string3.split(" "));
  testArray.push(syllableNum1, syllableNum2, syllableNum3);
  const toString = testArray.toString();

  const check = "5,7,5";
    if (toString === check) {
      return alert("this is a haiku, yo!");
    } else
      alert("learn how to poem, tyler!");
    }
}
