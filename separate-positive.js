/**
 * Takes an array of non-zero numbers and separates positive numbers to
 * the left and negative numbers to the right
 */

// add whatever parameters you deem necessary & write docstring
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {

    if (nums[left] < 0 && nums[right] > 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }

    if (nums[left] > 0) left++;
    if (nums[right] < 0) right--;

    // if(nums[left] < 0) {
    //   nums.push(nums[left]);
    //   nums.splice(left, 1);
    //   right--;
    // }
    // if(nums[right] > 0) {
    //   nums.unshift(nums[right]);
    //   nums.splice(right + 1, 1);
    //   left++;
    //   right--;
  }
  return nums;
}
