/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
// input: an array of numbers and a target number
   return nums.indexOf(target);
    // output: index of the found number or -1
};


console.log(search([0,1,5,8,16], 8));
console.log(search([0,1,5,8,16], 2));