function LinkedList() {
  function NodeItem(element) {
    this.next = null
    this.value = element
  }
  const items = []
  let length = 0
  let head = null
  this.append = function (element) {
    let node = new NodeItem(element),
      current
    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  this.insert = function (element, position) {
    if (position >= 0 && position <= length) {
      let node = new NodeItem(element),
        current = head,
        previous,
        index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        length++
        return true
      }
    } else {
      return false
    }
  }
  this.removeAt = function (position) {
    if (position >= 0 && position < length) {
      let current = head,
        previous,
        index = 0
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return true
    } else {
      return false
    }
  }
  this.remove = function(element) {
    let indexOfElement = this.indexOf(element)
    if (indexOfElement === -1) {
      return false
    } else {
      let current = head,
        previous = current,
        index = 0
      while (index++ < indexOfElement) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      length--
      return true
    }
  }
  this.indexOf = function (element) {
    let current = head,
      index = 0
    while (current) {
      if (current.value === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  this.isEmpty = function() {
    return this.size() === 0
  }
  this.size = function() {
    return length
  }
  this.getHead = function() {
    return head
  }
  this.toString = function() {
    let current = head,
      string = ''
    while (current) {
      string += current.value + (current.next ? '->' : '')
      current = current.next
    }
    return string
  }
  this.print = function() {
    if (this.isEmpty()) {
      console.log('空')
      return
    }
    let current = head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}
