// Stack 직접구현 1회차
// 기본 배열으로도 스택의 동작을 할 수 있으나, 큐와 파트너이기도 하고
// 개념 복습의 의미로 구현

// Stack의 원리
// 후입선출 LIFO

/**
 * @default 삽입 시 O(1)
 * @default 삭제 시 O(1)
 * @default 검색 시 O(n)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return;
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    console.log("==========stack==========");
    let answer = [];
    while (curr.next) {
      answer.push(curr.data);
      curr = curr.next;
    }
    console.log(answer.join(" "));
    console.log("=========================");
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());

stack.display();

console.log(stack.peek());

stack.pop();

stack.display();
