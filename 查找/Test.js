function test(searchFunc, n = 100) {
  let source = []
  for (let i = 0; i < n; i++) {
    source[i] = i + 1
  }
  let value = Math.floor(Math.random() * n)
  if(typeof searchFunc === 'function') {
    let start = Date.now()
    let index = searchFunc(value, source)
    let end = Date.now()
    console.log(`value: ${value}, index: ${index}, source[${index}]: ${source[index]}`)
    console.log(`耗时: ${end - start}ms`)
  } else {
    throw new Error('sortFunc is not a function')
  }
}
