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
        // the string must start with open brackets to be 'closed' and therefore true
    if (s[0] !== '(' || s[0] !== '[' || s[0] !== '{') {
        return false
    }

    // iterate over the string starting at the index of 1 now
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] !== ')') {
            return false;
        } else if ((i - 1) !== '[' && i !== ']')
    }
        // if the index at 1 is not the matched pair return false, otherwise continue

    // output: a boolean
    return true;
};

isValid('()');
isValid('()[]{}');
isValid('(]');