/*
add(value):向集合添加一个新的项。
delete(value):从集合移除一个值。
has(value):如果值在集合中，返回true，否则返回false。
clear():移除集合中的所有项。
size():返回集合所包含元素的数量。与数组的length属性类似。
values():返回一个包含集合中所有值的数组。
对象的key为字符串，所以 1 和 '1' 会出现问题
*/

function Set() {
  let items = {}
  this.add = (value) => {
    if (!this.has(typeof value + value)) {
      items[typeof value + value] = value
      return true
    }
    return false
  }
  this.has = (value) => {
    return items.hasOwnProperty(typeof value + value)
  }
  this.delete = (value) => {
    if (!this.has(typeof value + value)) {
      delete items[typeof value + value]
    }
    return false
  }
  this.clear = () => {
    items = {}
  }
  this.size = () => {
    return Object.keys(items).length
  }
  this.values = () => {
    let values = []
    for (let i in items) {
      if (items.hasOwnProperty(i)) {
        values.push(items[i])
      }
    }
    return values
  }
  this.print = () => {
    console.log(items)
  }
  this.union = (otherSet) => {
    let result = new Set()
    let values = this.values()
    values.forEach(item => {
      result.add(item)
    })
    values = otherSet.values()
    values.forEach(item => {
      result.add(item)
    })
    return result
  }
  this.diff = (otherSet) => {
    let result = new Set()
    let values = this.values()
    values.forEach(item => {
      result.add(item)
    })
    values = otherSet.values()
    values.forEach(item => {
     if (result.has(item)) {
       result.delete(item)
     }
    })
    return result
  }
  this.intersection = (otherSet) => {
    let temp = new Set()
    let values = this.values()
    let result = new Set()
    values.forEach(item => {
      temp.add(item)
    })
    values = otherSet.values()
    values.forEach(item => {
      if (temp.has(item)) {
        result.add(item)
      }
    })
    return result
  }
  this.subset = (otherSet) => {
    if (otherSet.size() > this.size()) return false
    return otherSet.values().every(item => this.has(item))
  }
}
let set = new Set()
set.add(1)
set.add(2)
set.add('1')
let b = new Set()
b.add(1)
b.add(3)
b.add('1')
b.add(100)
// set.union(b).print()
// set.diff(b).print()
// set.intersection(b).print()
let c = new Set()
c.add(2)
c.add('1')
// console.log(set.subset(c))
