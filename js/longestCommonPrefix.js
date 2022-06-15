/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

function longestCommonPrefix(stringArray) {
    // input: an array of strings
        // strategy: needs two loops, an inner loop and an outer one; if the inner index matches the outer index it
            // joins the letter to a return variable
    let longestPrefix = "";
    for (let i = 0; i < stringArray.length; i++) {
        let outerElement = stringArray[i];
        for (let j = i + 1; j < stringArray.length; j++) {
            let innerElement = stringArray[j];
            if (outerElement === innerElement) {
                longestPrefix += innerElement;
            }
        }
    }
    return longestPrefix;
    // output: a string with the longest common prefix or an empty string
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));