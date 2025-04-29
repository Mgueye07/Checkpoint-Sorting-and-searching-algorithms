/**
 * Sorts an array of numbers in-place using the Insertion Sort algorithm.
 *
 * This implementation utilizes two counters:
 * - `comparisonCounter`: Tracks the number of comparisons made during sorting.
 * - `swapCounter`: Tracks the number of swaps (or shifts) made during sorting.
 *
 * @param {number[]} arr The array of numbers to be sorted.
 * @returns {number[]} The sorted array (the original array is modified in-place).
 */
function insertionSortWithCounters(arr) {
  const n = arr.length;
  let comparisonCounter = 0;
  let swapCounter = 0;

  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // Iterate backwards through the sorted portion while the element is greater
    while (j >= 0 && arr[j] > currentElement) {
      comparisonCounter++; // Increment comparison counter
      arr[j + 1] = arr[j]; // Shift element to the right
      swapCounter++; // Increment swap counter (shift is a type of swap)
      j--;
    }

    // Insert the current element into its correct sorted position
    arr[j + 1] = currentElement;
    // Note: Even if no shift occurred, we still effectively place the element.
    // We could argue whether this always counts as a "swap". For consistency
    // with the shifting logic, we won't increment the swap counter here if
    // the element was already in its correct relative position.
  }

  console.log("Number of Comparisons:", comparisonCounter);
  console.log("Number of Swaps:", swapCounter);
  return arr;
}

// Example usage:
const dataToSort = [12, 11, 13, 5, 6];
const sortedData = insertionSortWithCounters(dataToSort);
console.log("Sorted array:", sortedData);
