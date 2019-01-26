function binarySearch(value, arr) {
  let high = arr.length - 1
  let times = 0
  let low = 0
  while(high !== low) {
    times++
    let middle = Math.floor((high + low) / 2)
    if(value > arr[middle]) {
      low = middle
    } else if(value < arr[middle]) {
      high = middle
    } else {
      console.log(times)
      return middle
    }
  }
  console.log(times)
  return -1
}
