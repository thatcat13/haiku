const syllable = require('syllable');


export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  countSyllables(string1, string2, string3){
    debugger;
    //stuff and things
    const check = "5,7,5";
    const testArray = [];
    const lineArray1 = string1.split(" ");
    const syllableNum1 = syllable(lineArray1);
    const lineArray2 = string2.split(" ");
    const syllableNum2 = syllable(lineArray2);
    const lineArray3 = string3.split(" ");
    const syllableNum3 = syllable(lineArray3);
    testArray.push(syllableNum1, syllableNum2, syllableNum3);
    const toString = testArray.toString();
     if (toString === check) {
       return alert("this is a haiku, yo!");
     }else
     alert("learn how to poem, tyler!");

  }
}
