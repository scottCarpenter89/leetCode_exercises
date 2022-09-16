/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let temp = 0;
    let sum;
    for (let i = 0; i < nums.length; i++) {
        sum = temp + nums[i];
        nums[i] = sum;
        temp = sum;
    }
    console.log(nums)
    return nums;
};

runningSum([1,2,3,4]);
runningSum([1,1,1,1]);
runningSum([3,1,2,10,1])