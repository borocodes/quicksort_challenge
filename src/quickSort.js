function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex); // index of number that was the pivot
    quickSort(compare, elements, lowerIndex, index - 1); // perform quicksort recursively on the left side
    quickSort(compare, elements, index + 1, upperIndex); // perform quicksort recursively on the right side
  }
  return elements; // returns the sorted array of elements
}

function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex]; // pivot value is last item in our elements array
  let partitionIndex = lowerIndex; // "i"

  // iterate through our array using index "j"
  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]); // +, -, 0

    // perform swap when condition is met
    if (comparison > 0) {
      if (partitionIndex !== index) {
        // perform the swap if the partition index "i" is not the same as "j" index
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++; // increment our "i"
    }
  }

  // final swap which switch "i" with the pivot
  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];

  return partitionIndex; // index where the pivot was moved to
}

function compare(left, right) {
  // -, 0 , +
  // negative: right is bigger than left
  // positive: left is bigger than right
  // 0
  return left - right;
}

module.exports = quickSort;
