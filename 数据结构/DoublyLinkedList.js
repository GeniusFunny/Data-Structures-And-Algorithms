function DoublyLinkedList() {
  function NodeItem(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
  const items = []
  let head = null,
    tail = null,
    length = 0
  this.append = (element) => {
    let node = new NodeItem(element)
    if (length === 0) {
      tail = head = node
      tail.next = head
      head.next = tail
      tail.prev = head
      head.prev = tail
    } else {
      node.next = head
      node.prev = tail
      head.prev = node
      tail.next = node
      tail = node
    }
    length++
  }
  this.indexOf = (element) => {
    let index = 0,
      current = head
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
      if (current === head) {
        break
      }
    }
    return -1
  }
  this.lastIndexOf = (element) => {
    let index = length - 1,
      current = tail
    while (current) {
      if (current.element === element) {
        return index
      }
      index--
      current = current.prev
      if (current === tail) {
        break
      }
    }
    return -1
  }
  this.remove = (element, removeFirst = true) => {
    let index = 0,
      current = head,
      prev = null,
      indexOfElement
    if (typeof removeFirst !== 'boolean' || removeFirst) {
      let indexOfElement = this.indexOf(element)
      while (index++ < indexOfElement) {
        prev = current
        current = current.next
      }
    } else {
      let indexOfElement = this.lastIndexOf(element)
      current = tail
      index = length
      while (index-- < indexOfElement) {
        prev = current
        current = current.prev
      }
    }
    if (indexOfElement === -1) {
      return false
    }
    current.next.prev = current.prev
    current.prev.next = current.next
    length--
    return true
  }
  this.insert = (element, position) => {
    if (position >= 0 && position < length) {
      let node = new NodeItem(element),
        index = 0,
        current = head
      if (position === 0) {
        node.prev = tail
        node.next = head
        head.prev = node
        tail.next = node
        head = node
      } else {
        while (index++ < position) {
          current = current.next
        }
        node.next = current
        node.prev = current.prev
        current.prev.next = node
        current.prev = node
      }
      length++
      return true
    } else {
      return false
    }
  }
  this.toString = () => {
    let string = '',
      current = head
    while (current) {
      string += current.element + (current.next === head ? '' : '->')
      current = current.next
      if (current === head) {
        break
      }
    }
    return string
  }
  this.toStringReverse = () => {
    let string = '',
      current = tail
    while (current) {
      string += current.element + (current.prev === tail ? '' : '<-')
      current = current.prev
      if (current === tail) {
        break
      }
    }
    return string
  }
  this.size = () => {
    return length
  }
  this.getHead = () => {
    return head
  }
  this.getTail = () => {
    return tail
  }
  this.isEmpty = () => {
    return length === 0
  }
}
