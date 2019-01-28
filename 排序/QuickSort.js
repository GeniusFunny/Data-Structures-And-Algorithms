function quickSort(arr, left, right) {
  let index
  if (arr.length > 1) {
    index =
  }
}

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}
