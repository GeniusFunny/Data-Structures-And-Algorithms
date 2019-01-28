// 改进后的冒泡排序
function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      console.log(`比较 ${arr[j]} ${arr[j+1]}`)
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

// 改进后的冒泡排序
function betterBubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      console.log(`比较 ${arr[j]} ${arr[j+1]}`)
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

const testArr = [5, 4, 3, 2, 1]
// bubbleSort(testArr)
betterBubbleSort(testArr)
