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

    let prefix = stringArray[0];
    for (let i = 1; i < stringArray.length; i++)
        // index of will return 0 when two string become equal in value
        while(stringArray[i].indexOf(prefix) !== 0) {
            // this creates a new shallow copy of the current prefix and reduces each letter if the strings don't match
            prefix = prefix.substring(0, prefix.length - 1);
        }
    // when the strings are finally equivalent, the while loop breaks and returns the prefix
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(['consequence', 'console', 'convoluted', 'contact']));