//栈的实现：ES5版本
// 封装一个栈，通过闭包隐藏items
// function Stack() {
//   let items = []
//   this.isEmpty = function () {
//     return items.length === 0
//   }
//   this.push = function(element) {
//     items.push(element)
//   }
//   this.pop= function() {
//     return items.pop()
//   }
//   this.top = function() {
//     return items[this.items.length - 1]
//   }
//   this.clear = function() {
//     this.items = []
//   }
//   this.size = function() {
//     return items.length
//   }
//   this.print = function() {
//     console.log(items.toString())
//   }
// }

//如果用ES6 class来封装一个栈，因为没有private关键字，items会暴露给外部；
// 可以使用Symbol，它是不可变的，可以用作对象属性
// 但是，Object.getOwnPropertySymbol可以获取到items的symbol进而修改items
// a[Object.getOwnPropertySymbol(a)[0]] ----> Stack里的items
let Stack = (function() {
  let _items = Symbol()
  class Stack {
    constructor() {
      this[_items] = []
    }
    size() {
      return this[_items].length
    }
  }
  return Stack
})()

// Why not weakMap
// 完美解决私有属性
// 但是，拓展类无法继承私有属性。。。
// That's ok
// OOP本就如此
let finalStack =(function () {
  let items = new WeakMap()
  class Stack {
    constructor() {
      items.set(this, [])
    }
    push(element) {
      let s = items.get(this)
      s.push(element)
    }
    pop() {
      let s = items.get(this).pop()
      return s.pop()
    }
    // ...other methods
  }
})()
