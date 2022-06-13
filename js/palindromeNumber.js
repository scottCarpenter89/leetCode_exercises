// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

function palindromeNumber(x) {
    // integers are easy to assess palindromes because they will have the same value forwards and backwards
    if (x < 0){
        return false;
    }
    let palindromeArray = [];
    let reversedArray = [];
    let palindromeString = x.toString();

    for (let i = 0; i < palindromeString.length; i++) {
        palindromeArray.push(palindromeString[i]);
        reversedArray.unshift(palindromeString[i]);
    }
    let reversedPalindrome = reversedArray.join('');
    let arrayToString = palindromeArray.join('');
   return arrayToString === reversedPalindrome;


}

console.log(palindromeNumber(-121));
console.log(palindromeNumber(1331));
console.log(palindromeNumber(211));
