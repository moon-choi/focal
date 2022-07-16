class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  depthFirstTraversal() {
    console.log(this); // 1

    for (const child of this.children) {
      child.depthFirstTraversal(); // 2
    }
  }
}
