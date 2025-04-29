function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    // Pick the current element to be inserted
    const currentElement = arr[i];

    // Iterate backwards through the sorted portion of the array (0 to i-1)
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      // Shift elements greater than currentElement to the right
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert currentElement into its correct position in the sorted portion
    arr[j + 1] = currentElement;
  }
  return arr;
}

// Example usage:
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: Sorted array: [5, 6, 11, 12, 13]
