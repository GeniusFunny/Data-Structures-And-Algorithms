function test(sortFunc, n = 100) {
  let source = []
  for (let i = 0; i < n; i++) {
    source[i] = Math.floor(Math.random() * 10000)
  }
  if(typeof sortFunc === 'function') {
    let start = Date.now()
    sortFunc(source)
    let end = Date.now()
    console.log(`数量：${n}, 耗时: ${end - start}ms`)
  } else {
    throw new Error('sortFunc is not a function')
  }
}

