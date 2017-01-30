//
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// Pig Latin Service
//
// There is a marked difference between the referenced article and the implementation
// being resuested.
//
// As per Wikipedia’s article on Pig Latin https://en.wikipedia.org/wiki/Pig_Latin
//
// All words beginning with consonants should move the first letter to the end, and then add “ay” on the end.
// “Pig” -> “igpay”
//
// All words beginning with vowels (A, E, I, O, U) should move the first letter to the end, and then add “i” on the end.
// “apple” -> “ppleai”
//
// ========================================================================================
// https://en.wikipedia.org/wiki/Pig_Latin
// ========================================================================================
// For words that begin with consonant sounds, all letters before the initial vowel are
// placed at the end of the word sequence. Then, "ay" (some people just add "a") is added,
// as in the following examples
// "pig" = "igpay"
// "banana" = "ananabay"
// "happy" = "appyhay"
// "duck" = "uckday"
// "latin" = "atinlay"
// "dopest" = "opestday"
// "me" = "emay"
// "too" = "ootay"
// "thanks" = "anksthay
//
// When words begin with consonant clusters (multiple consonants that form one sound),
// the whole sound is added to the end when speaking or writing.
// "cheers" = "eerschay"
// "trash" = "ashtray"
// "glove" = "oveglay"
// "shoot" = "ootshay"
// "smile" = "ilesmay"
//
// For words that begin with vowel sounds, one just adds "way" to the end. Examples are:
// "apple" = "appleway"
// "eat" = "eatway"
// "omelet" = "omeletway"
// "are" = "areway"
// "egg" = "eggway"
// ========================================================================================
//

import angular from 'angular';

const regex = /[aeiou]/gi;

class service {

  constructor() {
    this.bindFunctions();
  }

  bindFunctions() {
    this.translate = this.convertToPigLatin.bind(this);
  }

  // private function
  convertToPigLatin(text, useWiki) {
    // if its not a string or undefined then the answer is ''
    if ( !text || typeof text !== 'string') {
      return '';
    }

    // split text string into separate words
    let words = text.split(' ');

    let converted = [];
    words.forEach( word => {
      if (word.length) {
        let pig, first = word[0];
        if (first.match(regex)) {
          pig = useWiki ? this.wikiStartsVowel(word) : this.testStartsVowel(word);
        } else {
          pig = useWiki ? this.wikiStartsConsonant(word) : this.testStartsConsonant(word);
        }
        converted.push(pig);
      }
    });

    return converted.join(' ');
  }

  // move first letter to end and add 'i'
  testStartsVowel(word) {
    let first = word[0];
    let rest = word.substr(1);
    return `${rest}${first}i`;
  }

  // append 'way' to the end of word
  wikiStartsVowel(word) {
    return `${word}way`;
  }

  // move first letter to end and add 'ay'
  testStartsConsonant(word) {
    let first = word[0];
    let rest = word.substr(1);
    return `${rest}${first}ay`;
  }

  // find all consonants in cluster, move to end & add 'ay'
  wikiStartsConsonant(word) {
    let index = word.indexOf(word.match(regex)[0]);
    let first = word.substr(0, index);
    let rest = word.substr(index);
    return `${rest}${first}ay`;
  }
}

export default angular.module('myApp.services.pig-latin',  [])
  .service('PigLatinService', service)
  .name;
