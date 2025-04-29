/**
 * @file insertion_sort.js
 * @description This file contains a JavaScript implementation of the Insertion Sort algorithm
 * with added functionality to count the number of comparisons and swaps
 * performed during the sorting process.
 */

/**
 * Sorts an array of numbers in-place using the Insertion Sort algorithm.
 *
 * This implementation utilizes two counters to provide insights into the algorithm's
 * efficiency:
 * - `comparisonCounter`: Tracks the number of times elements are compared.
 * - `swapCounter`: Tracks the number of times elements are shifted (swapped)
 * to their correct position.
 *
 * @param {number[]} arr The array of numbers to be sorted. This array is modified
 * directly (in-place).
 * @returns {number[]} The same array that was passed as input, now sorted in
 * ascending order.
 *
 * @example
 * const unsortedArray = [12, 11, 13, 5, 6];
 * const sortedArray = insertionSortWithCounters(unsortedArray);
 * console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
 * // The console will also output the number of comparisons and swaps performed.
 */
function insertionSortWithCounters(arr) {
  const n = arr.length;
  let comparisonCounter = 0;
  let swapCounter = 0;

  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // Iterate backwards through the sorted portion of the array
    // while the current element is smaller than the element at the current
    // index in the sorted portion.
    while (j >= 0 && arr[j] > currentElement) {
      comparisonCounter++; // Increment the comparison counter
      arr[j + 1] = arr[j]; // Shift the larger element to the right
      swapCounter++; // Increment the swap counter (a shift is a type of swap)
      j--;
    }

    // Insert the current element into its correct sorted position.
    // The position is j + 1 because the while loop either decremented j to -1
    // (meaning currentElement is the smallest so far) or stopped at an element
    // smaller than or equal to currentElement.
    arr[j + 1] = currentElement;
  }

  // Log the performance metrics to the console. This is useful for analysis.
  console.log("Number of Comparisons:", comparisonCounter);
  console.log("Number of Swaps:", swapCounter);

  return arr;
}

// Example usage (can be commented out or removed if this file is meant to be a module):
const dataToSort = [12, 11, 13, 5, 6];
const sortedData = insertionSortWithCounters(dataToSort);
console.log("Sorted array:", sortedData);
