/**Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

 Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

 Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

 I can be placed before V (5) and X (10) to make 4 and 9.
 X can be placed before L (50) and C (100) to make 40 and 90.
 C can be placed before D (500) and M (1000) to make 400 and 900.
 Given a roman numeral, convert it to an integer.
 * @return {number}
 * @param romanNumeral
 */


function romanToInt(romanNumeral) {
    // input: a string

    // if it only accounts for only alphabetical characters defined
    if (typeof romanNumeral !== 'string') {
        return 0;
    } else {
        // convert the values to UPPERCASE because .includes is case-sensitive
        romanNumeral = romanNumeral.toUpperCase();
    }
    // define a variable to add values to
    let numericalResult = 0;
    if (romanNumeral.includes('IV') || romanNumeral.includes('IX')) {
        numericalResult -= 2;
    }
    if (romanNumeral.includes('XL') || romanNumeral.includes('XC')) {
        numericalResult -= 20;
    }
    if (romanNumeral.includes('CD') || romanNumeral.includes('CM')) {
        numericalResult -= 200;
    }
    // loop over the array
    for (let i = 0; i < romanNumeral.length; i++) {
        // create a switch with numerals corresponding to specific values
        switch (romanNumeral[i]) {
            case 'I':
                // add those values to the return variable
                numericalResult += 1;
                break;
            case 'V':
                numericalResult += 5;
                break;
            case 'X':
                numericalResult += 10;
                break;
            case 'L':
                numericalResult += 50;
                break;
            case 'C':
                numericalResult += 100;
                break;
            case 'D':
                numericalResult += 500;
                break;
            case 'M':
                numericalResult += 1000;
                break;
        }
    }

    // output: returns a numerical value
    return numericalResult;
}

console.log(romanToInt('III'));
console.log(romanToInt('XXIV'));
console.log(romanToInt('IX'));
console.log(romanToInt('XL'));
console.log(romanToInt('XC'));
console.log(romanToInt('CD'));
console.log(romanToInt('CM'));
console.log(romanToInt('MCMXCIV'));

// Solution runs faster than 99.66% of the submissions!
