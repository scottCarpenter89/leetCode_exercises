/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * @param {string} s
 * @return {boolean}
 *
 */
let isValid = function(s) {
    // input: a string of open/closed parenthetical characters
        // initial thoughts: the preceding string character must be an open bracket/curly/parenthesis to be true

    // iterate over the string starting at the index of 1 now
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] !== ')') {
            return false;
        } else if (s[i - 1] === '[' && s[i] !== ']') {
            return false;
        } else if (s[i - 1] === '{' && s[i] !== '}') {
            return false;
        }
    }
    // output: a boolean
    return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('][(){}'));