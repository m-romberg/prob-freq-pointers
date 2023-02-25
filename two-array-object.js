"use strict";

/** Takes 2 arrays (keys and values)
 * returns object with keys from keys and values from values: O(n)
 */

// add whatever parameters you deem necessary & write docstring
function twoArrayObject(keys, values) {
  let keysToValues = {};
  for(let i = 0; i < keys.length; i++) {
    if (values[i] === undefined) keysToValues[keys[i]] = null;
    else keysToValues[keys[i]] = values[i];
  }
  return keysToValues;
}
