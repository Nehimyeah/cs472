"use strict";

/**
 * #4
 * sums the values in the array
 * @param {Array.<number>} numbers
 * @returns the sum of the values in the array
 */
function sum(numbers) {
    return numbers.reduce((l, c) => l + c);
}

/**
 * #4
 * multiplies the values in the array
 * @param {Array.<number>} numbers
 * @returns the multiple of the values in the array
 */
function multiply(numbers) {
    return numbers.reduce((l, c) => l * c);
}

/**
 * #5
 * reverses the parameter string
 * @param {String} str
 * @returns reversed string of the parameter
 */
function reverse(str) {
    return str.split("").map(
        (ignore, i, arr) => arr[arr.length - 1 - i]
    ).join("");
}

/**
 * #7
 * @param {Array.<String>} words
 * @param {number} i
 * @returns words from the arrays that are longer than i
 */
function findLongWords(words, i) {
    return words.filter((c) => c.length > i);
}