'use strict';

// add whatever parameters you deem necessary & write docstring

/**
 * Function intakes SORTED array of numbers and average number (targetAvg) (UI)
 * Returns true if a pair averaged equals targetAvg, false if otherwise
 */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length -1;

  while (left < right){
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left ++;
    } else {
      right --;
    }
  }
  return false;
}

