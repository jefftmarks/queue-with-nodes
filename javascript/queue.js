class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
		const node = new Node(data);
		if (this.isEmpty()) {
			this.front = node;
			this.rear = node;
		} else {
			this.rear.next = node;
			this.rear = node;
		}
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
		const node = this.front;

		if (node) {
			this.front = node.next;
			this.rear = node.next ? this.rear : null;
		}

		return node;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
		return this.front === null;
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
		let count = 0;
		let node = this.front;

		while (node) {
			node = node.next;
			count++;
		}

		return count;
  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
		let count = 0;
		let node = this.front;

		while (node) {
			if (node.data === target) {
				return count;
			} else {
				node = node.next;
				count++;
			}
		}
		
		return -1;
  }
}

if (require.main === module) {
  // add your own tests in here
	let queue = new Queue();
	console.log(queue.enqueue("blue"));
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
