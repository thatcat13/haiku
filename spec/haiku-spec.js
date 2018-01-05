
import { Haiku } from './../js/haiku.js';

const syllable = require('syllable');
const userPoem = new Haiku('nathan nathan cat', 'line2', 'line3');


describe('Haiku', function(){
//testing suite
//spec, expectations
  it('should be a new object that is instantiated from Haiku class', function(){
    expect(userPoem).toBeObject();
  })


  it('all 3 lines should be a string', function(){
    expect(userPoem.line1).toBeString();
    expect(userPoem.line2).toBeString();
    expect(userPoem.line3).toBeString();
  })

  it('should return a number when the input is a string', function(){
    expect(syllable('nathan and cat')).toBeNumber();
  })

  it('should count number of syllables', function(){
    expect(syllable(userPoem.line1)).toBeNumber();
    expect(syllable(userPoem.line2)).toBeNumber();
    expect(syllable(userPoem.line3)).toBeNumber();
  })

  it('should return a string that contains 3 elements', function(){
    expect(countSyllables()).to();

  })

});
