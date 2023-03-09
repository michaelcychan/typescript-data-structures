# Data Structure Practice
This repo is for me to learn the basic data strcutures

I attempt to learn different data structures by building them from scratch using TypeScript.

## Linked List

The Linked List Class `MyLinkedList` stores generic type. Each `MyLinkedList` consists of instances of the `MyNode` class.  

Each `MyNode` stores a generic data and a pointer to the next `MyNode`.  

The `MyLinkedList` class has the following methods:  

```
.length()
// to return the length of the list

.addNewHead(`value`)
// to add a new node at head

.removeNode(`value`)
// to remove the value

.removeHead()
// to remove the head of the List

.reverseIndex(`target`)
// to find the reverse index of the target

.swapping(a, b)
// to swap the position of the targets in the List

.findMid()
// to find the middle node (tail-centered) of the List

.stringifyList()
// to return a stringified version of the list (only when stored data is number or string)

```

## Doubly Linked List

The Doubly Linked List Class `TwoWayLinkedList` is a generic class which can store different types of data. Each `TwoWayLinkedList` consists of instances of the `MyTwoWayNode` class, which also stores generic type of data. Only nodes storing the same type of data can be linked together. 

Each `MyTwoWayNode` stores one data and two pointers, one to the next and one to the previous `MyTwoWayNode`.  

The `TwoWayLinkedList` class has the following methods:  


```
.getHead()
// return the head node

.getTail()
// return the tail node

stringify()
//return a string of the whole List starting from the head

.addHead(value)
// add a new head with value as data to the List

.addTail(value)
// add a new tail with value as data to the List

.length()
// returns the lenght of the List

.removeHead()
// remove the head

.removeTail()
// remove the tail

.removeByValue(value)
// remove the node with the target value
```

## Queue

The `MyQueue` class utilises the `MyNumLinkedList` class. A queue stores and removes data in FIFO principle. `MyQueue` class has the following methods:

```
.getMaxSize()
// returns the max size of the queue

.getSize()
// returns the current size of the Queue

.enqueue(data)
// add a new data to the tail of the queue

.dequeue()
// remove the item from head

.peek()
// returns the head of the queue (the one enqueued first and will be dequeued next)
```

## Stack

The `MyStack` class utilises the `MyNumLinkedList` class. A queue stores and removes data in *FILO* principle. `MyStack` class has the following methods:

```
.getMaxSize()
// returns the max size of the stack

.getSize()
// returns the current size of the stack

.push(data)
// add a new data to the top of the stack

.pop()
// remove the item from top

.peek()
// returns the top of the stack (the one pushed last and will be popped next)
```

## Hash Map

The `MyHash` class utilises the `MyLinkedList` class to store key-value pairs. `MyHash` class has the following methods:  

```
.set(key, value)
// Store / amend data with key as identifier. key can be number or string.

.retrieve(key)
// returns the value of the key-value pair. returns null if no such key exists

.delete(key)
// delete the key-value pair
```

## Tree

The `Tree` class stores data in a tree format, it has the following methods:

```
.getValue()
// return the data stored in this Tree node

.addChild()
// add a child tree node to the current node

.removeChild(target Tree node / value)
// it removes the target tree node by comparing the value of the two nodes, or directly value to the the tree node

.getChildren()
// returns the array containing the children nodes

.breadthFirstTraversal()
// returns an array of values of all nodes in this tree with Breadth First Traversal, iteratively.

.depthFirstTraversalRecursive()
// returns an array of values of all nodes in this tree with Depth First Traversal, recursively.

.stringify()
// [for string and number typed trees only] returns a string that shows the tree structure, example:

root
-- branch1
-- -- deeper branch
-- -- -- leave
-- -- -- anotherleave
-- -- suddenbranch
```
## Binary Search

`binarySearch()` is implemented to search the target from an array or number or string, the function returns the index of the target, and returns -1 if the target is not found.  
It will throw errors in the following conditions:

- array is not sorted in ascending order
- the target type is not the same type of the array elements  

