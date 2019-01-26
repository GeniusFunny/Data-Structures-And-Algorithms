function test(sortFunc, n = 100) {
  let source = []
  for (let i = 0; i < n; i++) {
    source[i] = Math.ceil(Math.random() * n)
  }
  if(typeof sortFunc === 'function') {
    let start = Date.now()
    sortFunc(source)
    console.log(source.toString())
    let end = Date.now()
    console.log(`数量：${n}, 耗时: ${end - start}ms`)
  } else {
    throw new Error('sortFunc is not a function')
  }
}

function findIndexOfMin(index, arr) {
  let indexOfMin = index
  for(let i = index, len = arr.length; i < len; i++) {
    if (arr[i] < arr[indexOfMin]) {
      indexOfMin = i
    }
  }
  return indexOfMin
}

function selectionSort(arr) {
  for(let i = 0, len = arr.length; i < len; i++) {
    let min = findIndexOfMin(i, arr) //  找到最小值的索引
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
}

console.log('选择排序：')
test(selectionSort, 1)
