// Definition for a binary tree node.
export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  height: number = 1;
  constructor(
    val?: number,
    left?: BinaryTreeNode | null,
    right?: BinaryTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class BinaryTree {
  public static delete(
    root: BinaryTreeNode | null,
    key: number
  ): BinaryTreeNode | null {
    if (!root) {
      return null;
    }

    if (key < root.val) {
      root.left = BinaryTree.delete(root.left, key);
    } else if (key > root.val) {
      root.right = BinaryTree.delete(root.right, key);
    } else {
      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      const successor = this.treeMinimum(root.right);
      root.val = successor.val;
      root.right = BinaryTree.delete(root.right, successor.val);
    }

    return root;
  }

  public static insert(
    root: BinaryTreeNode | null,
    key: number
  ): BinaryTreeNode | null {
    const newNode = new BinaryTreeNode(key);
    let parentNode: BinaryTreeNode | null = null;
    let currentNode = root;

    while (currentNode) {
      parentNode = currentNode;
      if (key < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // Tree is empty
    if (!parentNode) {
      root = newNode;
    } else if (key < parentNode.val) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }

    return root;
  }

  public static treeMinimum(root: BinaryTreeNode): BinaryTreeNode {
    while (root !== null && root.left !== null) {
      root = root.left;
    }

    return root;
  }

  public root: BinaryTreeNode | null = null;

  public constructor(root: BinaryTreeNode) {
    this.root = root;
  }

  public delete(key: number): BinaryTreeNode | null {
    BinaryTree.delete(this.root, key);
    return this.root;
  }

  public insert(key: number): BinaryTreeNode | null {
    BinaryTree.insert(this.root, key);
    return this.root;
  }
}
