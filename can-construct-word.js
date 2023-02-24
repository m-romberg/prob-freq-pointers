'use strict';
// add whatever parameters you deem necessary & write doc comment

/**
 * function takes in word string and letter strings
 * returns true if letters string can build word, else false
 * case and frequency sensitive
 *  */

// TODO: shorten lines, rename wordFreq

function canConstructWord(word, letters) {

  const wordFreq = getFrequencyCounter(word);
  const letterFreq = getFrequencyCounter(letters);

  for (const char in wordFreq){
    console.log(
      'char', char,
      "word", wordFreq[char],
      "letter", letterFreq[char] );

    if (wordFreq[char] > letterFreq[char] || letterFreq[char]=== undefined) {
      return false;
    }
  }
  return true;

}

/**
 * Intakes an item (arr, str, etc)
 * returns object with elements as key and frequency value
 */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}
