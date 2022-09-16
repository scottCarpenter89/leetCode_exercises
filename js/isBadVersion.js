/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    let n;
    isBadVersion.forEach = function (number) {
        number < isBadVersion ? n = false : n = true;
    }

    return function(n) {
        return n;
    };
};

console.log(solution([]))