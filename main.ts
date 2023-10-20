/* Test inputs */
const numberList: number[] = [1, 2, 3, 4, 5];

/*  4.1 write out the code for the earlier sum function */
function sumItems(list: any[], index: number = 0): number {
  // Base case: if the index is equal to the length of the list, we've counted all items.
  if (index === list.length) {
    return 0;
  }
  // Recursive case: count one item and move to the next index.
  return 1 + sumItems(list, index + 1);
}

/* 4.2 Write a recursive function to count the number of items in a list. */
function countItems(list: any[]): number {
  // Base case: an empty list has 0 items.
  if (list.length === 0) {
    return 0;
  }
  // Recursive case: count one item, and then count the rest of the list.
  return 1 + countItems(list.slice(1));
}

/* 4.3 Find the maximum number in a list. */
function findMaxNumber(
  list: number[],
  currentIndex: number = 0,
  maxNumber: number = Number.MIN_VALUE
) {
  // Base case: last item of list
  if (currentIndex === list.length) {
    return maxNumber;
  }
  // Compare max element with current element of list.
  if (list[currentIndex] > maxNumber) {
    maxNumber = list[currentIndex];
  }
  // Recursive case: Compare the next element
  return findMaxNumber(list, currentIndex + 1, maxNumber);
}

/* Examples */
const sumOfItems = sumItems(numberList);
const itemCount = countItems(numberList);
const maxNumber = findMaxNumber([5, 3, 2, 14, 1, 6]);
