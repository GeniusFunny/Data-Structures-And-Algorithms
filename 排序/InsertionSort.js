function insertionSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}
const testArr = [5, 4, 3, 2, 1]
insertionSort(testArr)
console.log(testArr)
