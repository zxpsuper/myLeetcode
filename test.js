let nums = [2, 7, 11, 15, 23, 49, 66, 86, 120, 33, 78],
  target = 93;
console.time("test");
// var twoSum = function(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const otherIndex = map.get(target - nums[i]);
//     if (otherIndex !== undefined) return [otherIndex, i];
//     map.set(nums[i], i);
//   }
// };

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum(nums, target));
console.timeEnd("test");
