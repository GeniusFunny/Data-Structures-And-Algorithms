function Queue() {
  const items = []
  this.enqueue = function (element) {
    items.push(element)
  }
  this.isEmpty = function () {
    return items.length === 0
  }
  this.dequeue = function () {
    items.shift()
  }
  this.front = function () {
    return items[0]
  }
  this.print = function () {
    console.log(items.toString())
  }
}

const es6Queue = (function () {
  let items = new WeakMap()
  class Queue {
    constructor() {
      items.set(this, [])
    }
    enqueue(element) {
      items.get(this).push(element)
    }
    dequeue() {
      return items.get(this).shift()
    }
    isEmpty() {
      return items.get(this).length === 0
    }
    front() {
      return items.get(this)[0]
    }
    print() {
      console.log(items.get(this).toString())
    }
  }
  return Queue
})()

// 优先队列
function PriorityQueue() {
  let items = []
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false
    for (let i = 0, len = items.length; i < len; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }
  this.print = function () {
    for (let i = 0, len = items.length; i < len; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
}
