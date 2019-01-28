function mergeSort(arr) {
  return mergeSortRec(arr)
}

function mergeSortRec(arr) {
  const len = arr.length
  if (len === 1) {
    return arr
  }
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, len)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
  let result = [],
    il = 0,
    ir = 0
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  while (il < left.length) {
    result.push(left[il++])
  }
  while (ir < right.length) {
    result.push(right[ir++])
  }
  return result
}
