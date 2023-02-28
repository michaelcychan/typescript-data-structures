# data-structure-practice
This repo is for me to learn the basic data strcutures

I attempt to learn different data structures by implementing my own versions using TypeScript.

## Basic Linked List
The Linked List Class `MyNumLinkedList` stores numbers. Each `MyNumLinkedList` consists of instances of the `MyNumberNode` class.  

Each `MyNumberNode` stores a number and a pointer to the next `MyNumberNode`.  

The `MyNumLinkedList` class has the following functions:  
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

```

## Doubly Linked List
The Doubly Linked List Class `TwoWayLinkedList` stores numbers. Each `TwoWayLinkedList` consists of instances of the `MyTwoWayNode` class.  

Each `MyTwoWayNode` stores a number and two pointers, one to the next and one to the previous `MyTwoWayNode`.  

The `TwoWayLinkedList` class has the following functions: 

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
