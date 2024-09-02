# DSA 101

1. Data Structures
   1. Binary Trees
   2. Binary Search Tree
      1. Breadth-First Traversal
      2. Depth-First Traversal
      3. Balancing a tree
   3. Graph
      1. Graph Traversals
         1. Depth-first search
         2. Breadth-first search
      1. Shortest Paths
         1. Dijkstra
   4. Disjoint Sets
   5. Heap
   6. Stack
2. Search Algorithms
   1. Binary Search
3. Sorting Algorithms
   1. Insertion Sort
   2. Mergesort
   3. Quicksort
4. Techniques
   1. Prefix Sum Array
   2. Sliding Window

## 1. Data Structures

### 1.1 Binary Trees

Trees are a data structure that consists of nodes and arcs. The root is a node that has no parent, it can only have child nodes. Leaves, on the other hand, have no children, or rather, their children are empty structures.

> Each node has to be reachable from the root through a unique sequence of arcs, called a path. The number of arcs in a path is called the length of the path. The level of a node is the length of the path from the root to the node plus 1, which is the number of nodes in the path. The height of a non-empty tree is the maximum level of a node in the tree.

A binary tree is a tree whose nodes have two children, and each child is designated as either a left child or a right child.

$$
log_ab = x \Leftrightarrow a^x = b \\

log_2b=x \Leftrightarrow 2^x=b
$$

An important characteristic of binary trees, which is used in assessing an expected efficiency of sorting algorithms, is the number of leaves.

> As already defined, the level of a node is the number of arcs traversed from the root to the node plus one. According to this definition, the root is at level 1, its non-empty children are at level 2 and so on. If all the nodes at all levels except the last had two children, then there would be $1=2^0$ node at level 1, $2=2^1$ at level 2, $4=2^2$ at level 3 and, generally, $2^i$ nodes at level $i + 1$.
>
> A tree satisfying this condition is referred to as a complete binary tree. Consequently, there are at most $2^i$ nodes at level i + 1.

Because leaves can be interspersed throughout a tree and appear at each level except level 1, no generally applicable formula can be given to calculate the number of nodes because it may vary from tree to tree. But the formula can be approximated by first noting that:

> For all non-empty binary trees whose non-terminal nodes have exactly two non-empty children, the number of leaves $m$ is greater than the number of non-terminal nodes $k$, and $m = k+1$.
>
> If it holds for a certain tree, then after attaching two leaves to one of the already existing leaves, this leaf turns into a non-terminal node, whereby m is decremented by 1 and k is incremented by 1. However, because two new leaves have been grafted onto the tree, m is incremented by 2. After these two increments and one decrement, the equation (m-1)+2=(k+1)+1 is obtained and m=k+1 holds true.
>
> It implies that an $i + 1$-level complete binary tree has $2^i$ leaves, and $2^i - 1$ non-terminal nodes, which makes $2^i + 2^i - 1 = 2^{i+1} - 1$ nodes in total.

### 1.2 Binary Search Tree

A binary search tree has the following property: for each node $n$ of the tree, all values stored in its left subtree (the tree whose root is the left child) are less than the value $v$ stored in $n$, and all values stored in the right subtree are greater than $v$.

An algorithm for locating an element in this tree is quite straightforward. For every node, compare the element to be located with the value stored in the node. If the element is less than the value, go to the left subtree and try again. If it is greater than the value, try the right subtree. If it is the same, the search can be discontinued. Average time complexity: $O(lg n)$.

```
SEARCH(node, element):
    while node
        if element == node.value:
            return node.value
        else if element < node.value:
            node = node.left
        else node = node.right
    return -1
```

#### 1.2.1 Breadth-First Traversal

 <!-- Breadth-first traversal is visiting each node starting from the lowest (or highest) level and moving down (or up) level by level, visiting nodes on each level from left to right (or from right to left). -->

<!-- Implementation of this kind of traversal is straightforward when a queue is used. Consider a top-down, left-to-right, breadth-first traversal. After a node is visited, its children, if any, are placed at the end of the queue, and the node at the beginning of the queue is visited. Considering that for a node on level $n$, its children are on level $n + 1$, by placing these children at the end of the queue, they are visited after all nodes from level $n$ are visited. Thus, the restriction that all nodes on level $n$ must be visited before visiting any node on level $n + 1$ is met. -->

<!-- BFT
let queue
let node = root
if (node)
queue.enqueue(node)
while (!queue.empty)
node = queue.dequeue()
visit(node)
if (node.left)
queue.enqueue(node.left)
if (node.right)
queue.enqueue(node.right) -->

#### 1.2.2 Depth-First Traversal

<!-- Depth-first traversal proceeds as far as possible to the left (or right), then backs up until the first crossroad, goes one step to the right (or left), and again as far as possible to the left (or right). We repeat this process until all nodes are visited. This definition, however, does not clearly specify exactly when nodes are visited: before proceeding down the tree or after backing up? There are some variations of the depth-first traversal.

V - visiting a node
L - traversing the left subtree
R - traversing the right subtree

VLR - preorder tree traversal

PRE-ORDER(node)
if (node)
visit(node)
PRE-ORDER(node.left)
PRE-ORDER(node.right)

LVR - inorder tree traversal

IN-ORDER(node)
if (node)
IN-ORDER(node.left)
visit(node)
IN-ORDER(node.right)

LRV - postorder tree traversal

POST-ORDER(node)
if (node)
POST-ORDER(node.left)
POST-ORDER(node.right)
visit(node) -->

#### 1.2.3 Balancing a tree

A binary tree is height-balanced or simply balanced if the difference in height of both subtrees of any node in the tree is either zero or one. A tree is considered perfectly balanced if it is balanced and all leaves are to be found on one level or two levels.

Because each node can have two children, the number of nodes on a certain level is double the number of parents residing on the previous level. For example, if 10.000 elements are stored in a perfectly balanced tree, then the tree is of height $\lceil lg 10.001 \rceil = \lceil 13,289 \rceil = 14$ . In practical terms, this means that if 10.000 elements are stored in a perfectly balanced tree, then at most 14 nodes have to be checked to locate a particular element.

There are a number of techniques to properly balance a binary tree. Some of them consist of constantly restructuring the tree when elements arrive and lead to an unbalanced tree. Some of them consist of reordering the data themselves and then building a tree.

When data arrives, store all of them in an array. After all data arrives, sort the array. Now designate for the root the middle element of the array. The array now consists of two subarrays, one between the beginning of the array and the element just chosen to be the root and one between the root and the end of the array. The left child of the root is taken from the middle of the first subarray, its right child an element in the middle of the second subarray. Now, building the level containing the children of the root is finished. The next level, with children of the children of the root, is constructed in the same fashion using four subarrays and the middle elements from each of them.

```
BALANCE(data, first, last):
    if first <= last:
        middle = (first + last) / 2
        insert(data[middle])
        balance(data, first, middle - 1)
        balance(data, middle + 1, last)
```

### 1.3 Graph

A simple graph $G=(V,E)$ consists of a nonempty set of $V$ **vertices** and possibly empty set $E$ of **edges**, each edge being a set of two vertices from $V$. The number of vertices and edges is denoted by $|V|$ and $|E|$, respectively. One edge of a simple graph is of the form $\{v_i, v_j\}$, and for such an edge, $\{v_i, v_j\} = \{v_j, v_i\}$. In a **directed graph**, each edge is of the form $(v_i, v_j)$ and, in this case, $(v_i, v_j) \neq (v_j, v_ i)$.

A **path** from $v_1$ to $v_n$ is a sequence of edges from $edge(v_1, v_2)$, $edge(v_2, v_ 3)$, …, $edge(v_{n-1},v_n)$ and is detoned as path $v_1, v_2, v_3, ..., v_{n-1}, v_n$. If $v_1 = v_n$ and no edge is repeated, then the path is called a **circuit**. If all vertices in a circuit are different, then it is called a **cycle**.

A graph is called a **weighted graph** if each edge has an assigned number.

A graph with $n$ vertices is called **complete** and is denoted $K_n$ if for each pair of distinct vertices there is exactly one edge connecting them; that is, each vertex can be connected to any other vertex. The number of edges in such a graph $|E|$:

$$ \frac{|V|!}{2!(|V|-2)!} = \frac{|V|(|V|-1)}{2} = O(|V|^2) $$

Two vertices $v_i$ and $v_j$ are called **adjacent** if the $edge(v_i, v_j)$ is in $E$ The degree of a vertex $v$, $deg(v)$, is the number of edges incident with $v$. If $deg(v) = 0$, then $v$ is called an **isolated vertex**.

#### 1.3.1 Graph Traversals

As in trees, traversing a graph consists of visiting each vertex only one time. The simple traversal algorithms used for trees cannot be applied here because graphs may include cycles. To prevent infinite loops, each visited vertex can be marked to avoid revisiting it.

There are two primary graph traversal algorithms: breadth-first search (BFS) and depth-first search (DFS). For certain problems, it makes no difference which you use, but in others the distinction is crucial. The difference between the BFS and DFS results is in the order in which they explore vertices. This order depends completely upon the container data structure to store discovered but not processed vertices.

1. Queue: by storing the vertices in a first-in, first-out (FIFO) queue, we explore the olders unexplored vertices first. Thus our explorations radiate out slowly from the starting vertex, defining a breadth-first search;
2. Stack: by storing the vertices in a last-in, first-out (LIFO) stack, we explore the vertices by lurching along a path, visiting a new neighbor if one is available, and backing up only when we are surrounded by previously discovered vertices. Thus, our explorations quickly wander away from our starting point, defining a depth-first search.

##### 1.3.1.1 Depth-first search

The strategy followed by depth-first search is to search “deeper” in the graph whenever possible. Depth-first search explores edges out of the most recently discovered vertex $v$ that still has unexplored edges leaving it. Once all of $v$’s edges have been explored, the search “backtracks” to explore edges leaving the vertex from which $v$ was discovered.

```
DFS(G):
    for each vertex v in G.V:
        v.color = WHITE
        v.pi = NULL
    time = 0
    for each vertex v in G.V:
        if v.color == WHITE:
            DFS-VISIT(G, v)

DFS-VISIT(G, v):
    time = time + 1
    v.d = time
    v.color = GRAY
    for each vertex u in G.Adj[v]:
        if u.color == WHITE:
            u.pi = v
            DFS-VISIT(G, u)
    v.color = BLACK
    time = time + 1
    v.f = time
```

The complexity of DFS is $O(|V|+|E|)$.

##### 1.3.1.2 Breadth-first search

<!-- breadthFirstSearch():
for all vertices u
num(u) = 0
edges = null
i = 1
while there is a vertex v such that num(v) is 0
num(v) = i++
enqueue(v)
while queue is not empty
v = dequeue()
for all vertices u adjacent to v
if num(u) is 0
num(u) = i++
enqueue(u)
attach edge(v, u) to edges
return edges


BFS() first tries to mark all neighbors of a vertex v before proceeding to other vertices, whereas DFS() picks one neighbor of a v and then proceeds to a neighbor of this neighbor before processing any other neighbors of v. -->

#### 1.3.2 Shortest Paths

##### 1.3.2.1 Dijkstra

```
ShortestPathDijisktra(G, s, t):
    known = {s}
    for i = 1 to n:
        dist[i] = Infinity
    for each edge (s, v):
        dist[v] = w(s, v)
    last = s
    while last:
        select vNext, the unknown vertex minimizing dist[v]
        for each edge (vNext, v):
            dist[x] = min(dist[x], dist[vNext] + w(vNext, x))
            last = vNext
            append vNext to known
```

### 1.4 Disjoint Sets

A **disjoint-set data structure** maintains a collection $S = \{ S_1, S_2, ..., S_k \}$ of disjoint dynamic sets. We identify each set by a representative, which is some member of the set. Some applications may require a prespecified rule for choosing the representative, such as choosing the smallest member in the set.

One of the many applications of disjoint-set data structures arises in **determining the connected components of an undirected graph**.

Let $x$ detone an object in which we wish to support the following operations:

- MAKE-SET(x) creates a new set whose only member is $x$. Since the sets are disjoint, we require that $x$ not already be in some other set;
- UNION(x, y) unites the dynamic sets that contain $x$ and $y$, say $S_x$ and $S_y$, into a new set that is the union of these two. The representative of the resulting set is any member of $S_x \cup S_y$. Since we require the sets in the collection to be disjoint, conceptually we destroy sets $S_x$ and $S_y$;
- FIND-SET(x) returns a pointer to the representative of the unique set containing $x$.

```
CONNECTED-COMPONENTS(G):
    for each vertex v in G.V:
        MAKE-SET(v)
    for each edge (u, v) in G.E:
    if FIND-SET(u) !== FIND-SET(v):
        UNION(u, v)

SAME-COMPONENT(u, v):
    if FIND-SET(u) == FIND-SET(v):
        return TRUE
    return FALSE
```

The procedure CONNECTED-COMPONENTS initially places each vertex $v$ in its own set. Then, for each edge $(u,v)$, it unites the sets containing $u$ and $v$. After processing all the edges, two vertices are in the same connected component if and only if the corresponding objects are in the same set. Thus, CONNECTED-COMPONENTS computes sets in such a way that the procedure SAME-COMPONENT can determine wheter two vertices are in the same connected component.

### 1.5 Heap

The **binary heap** data structure is an array object that we can view as a nearly complete binary tree. An array $A$ that represents a heap is an object with two attributes: $A.length$, which gives the number of elements in the array, and $A.heapSize$, which represents how many elements in the heap are stored within $A$. That is, although $A[1.. A.length]$ may contain numbers, only the elements in $A[1..A.heapSize]$, where $ 0 \leq A.heapSize \leq A.length$, are valid elements of the heap.

The root of the tree is $A[1]$, and given the index $i$ of a node, we can easily compute the indices of its parent, left child and right child:

```
PARENT(i):
    return ⌊i/2⌋

LEFT(i):
    return 2i

RIGHT(i)
    return 2i+1
```

There are two kinds of binary heaps: max-heaps and min-heaps. In both kinds, the values in the nodes satisfy a **heap property**, the specifics of which depend on the kind of heap.

> In a max-heap, the max-heap property is that for every node $i$, other than the root, $A[PARENT(i)] \geq A[i]$, that is, the value of a node is at most the value of its parent. Thus, the largest element in a max-heap is stored at the root, and the subtree rooted at a node contains values no larger than that contained at the node itself.
>
> A min-heap is organized in the opposite way: the min-heap property is that for every node i other than the root, $A[PARENT(i)] \leq A[i]$. The smallest element in a min-heap is at the root.

Viewing a heap as a tree, we define the height of a node in a heap to be the number of edges on the longest simple downward path from the node to a leaf, and we define the height of the heap to be the height of its root. Since a heap of $n$ elements is based ona complete binary tree, its height is $\Theta(lg n)$.

The basic operations on heaps run in time at most proportional to the height of the tree, and thus take $O(lg n)$ time.

1. The MAX-HEAPIFY procedure, which runs in $O(lg n)$, is the key to maintaining the max-heap property;
2. The BUILD-MAX-HEAP procedure, which runs in linear time, produces a max-heap from an unordered input array;
3. The HEAPSORT procedure, which runs in $O(lg n)$ time, sorts an array in place;
4. The MAX-HEAP-INSERT, HEAP-EXTRACT-MAX, HEAP-INCREASE-KEY and HEAP-MAXIMUM procedures, which run in $O(lg n)$ time, allow the heap to implement a priority queue;

_**6.1-1** What are the minimum and maximum numbers of elements in a heap of height $h$?_

Since a heap is a almost-complete binary tree, and by definition a complete binary tree of height $i + 1$ has $2^i$ nodes, the number of elements in a heap of depth $h$ is between the number of a complete binary tree of heigh $h - 1$ (exclusive) and the number of a complete binary tree of height h (inclusive). Thus the minimum is $2^h$ and the maximum is $2^{h+1} - 1$ elements.

_**6.1-2** Show that an n-element heap has height $\lfloor log n \rfloor$._

If an heap has $n$ elements and heaps are considered almost-complete binary trees, then $n$ is at least $2^h$, where $h$ is the height of the tree. Thus $n = 2^h \leftrightarrow h = lg n$.

_**6.1-3** Show that in any subtree of a max-heap, the root of the subtree contains the largest value occurring anywhere in that subtree._

If the largest element in the subtree were anywhere but the root, it means that this element has a parent in the subtree, and that element would be bigger than its parent, thus violating the definition of a max-heap tree.

_**6.1-4** Where in a max-heap might the smallest element reside, assuming that all elements are distinct?_

The smallest element would reside in a leaf node. For every subtree in a max-heap, the max-heap property must be satisfied, that is, for every subtree $A[PARENT(element)] \geq A[element]$. Since all elements in the max-heap are distinct, the inequality is strict, thus $A[PARENT(element)] > A[element]$. If the smallest element would be anywhere but a leaf node, the max-heap property would be violated, because there would exist a child of $A[element]$ that would be bigger than itself.

_**6.1-5** Is an array that is in sorted order a min-heap?_

Yes, because the array is sorted in increasing order, for any index $i$, the values of $LEFT(i)$ and $RIGHT(i)$ evaluate to an element bigger than $A[i]$ itself, thus maintaining the min-heap property.

_**6.1-6** Is the array with values [23,17,14,6,13,10,1,5,7,12] a max-heap?_

No. While iterating through the heap, we discover that the parent of the element 7, of index 9 is $A[\lfloor(9/2)\rfloor] = A[4] = 6$, violating the max-heap property.

_**6.1-7** Show that, with the array representation for storing an $n$-element heap, the leaves are the nodes indexed by $⌊n/2⌋ + 1, ⌊n/2⌋ + 2, …, n$._

Given a node with index $⌊n/2⌋ + 1$, the index of its left child node would be:

$$ LEFT(⌊n/2⌋+1)=2(⌊n/2⌋+1)=2⌊n/2⌋ - 2 > 2((n/2)-1)+2 = 2n/2-2 +2 = n $$

Thus any $index >= ⌊n/2⌋ + 1$ is outside the $n$-element size of the heap.

### 1.6 Stack

A stack is a linear data structure that can be accessed only at one of its ends for storing and retrieving data. For this reason, a stack is called an LIFO structure: last in, first out. Generally, the stack is very useful in situations when the data has to be stored and then retrieved in reversed order. One application of the stack is in matching delimiters in a program.

## 2. Search Algorithms

### 2.1 Binary Search

<!-- Finding an item from a sorted list
The main idea of binary search is to keep track of the current range of reasonable guesses:
Let min = 1 and max = n
Guess the average of max and min, rounded down so it is an integer
If you found the number you are looking for, stop
If the guess is lower, set min to be one larger than the guess
If the guess is higher, set max to be one smaller than the guess
Go back to step two
O(log n) -->

## 3. Sorting Algorithms

A sorting algorithm sorts in place if only a constant number of elements of the input are ever sorted outside the array.

Insertion Sort (Bubble Sort)
Efficient algorithm for sorting a small number of elements.
The algorithm sorts the array in place.
O(n^2) on average.

INSERTION-SORT(A)
for i = 1 to A.length
key = A[i]
j = i - 1
while j > 0 and A[j] > key
A[j + 1] = A[j]
j = j - 1
A[j + 1] = key

Merge Sort
Does not operate in place.
The merge sort algorithm closely follows the divide-and-conquer paradigm. Intuitively, it operates as follows:
Divide: Divide the n-element sequence to be sorted into two subsequences of n/2 elements each
Conquer: Sort the two subsequences recursively using merge sort
Combine: Merge the two sorted subsequences to produce the sorted answer

MERGESORT(A, low, high):
if high-low>0:
let middle = ⌊(low+high)/2⌋
mergesort(A, low, middle)
mergesort(A, middle + 1, high)
merge(A, low, middle, high)

MERGE(A, low, middle, high):
let L and R be new arrays
for i=low to middle:
L.push(A[i])
for i=middle+1 to high:
R.push(A[i])

let i=low
while L.length || R.length:
if (L[0]<R[0]):
A[i++] = L.pop()
else:
A[i++] = R.pop()

while L.length:
A[i++] = L.pop()
while R.length:
A[i++] = R.pop()

Quicksort
Supose we select a random item p from the n items we seek to sort. Quicksort separates the n-1 other items into two piles: a low pile containing all the elements that appear before p in sorted order and a high pile containing all the elements that appear after p in sorted order. Low and high denote the array positions we place the respective piles, leaving a single slot between them for p.
Such partitioning buys us two things. First, the pivot element p ends up in the exact array position it will reside in the final sorted order. Second, after partitioning no elements flops to the other pile in the final order, thus we can now sort the elements to the left and the right independently. This gives us a recursive sorting algorithm, since we can use the partitioning approach to sort each subproblem.

QUICKSORT(A, low, high):
let pivot
if high-low>0:
pivot = partition(A, low, high)
quicksort(A, low, pivot - 1)
quicksort(A, pivot + 1, high)

PARTITION(A, low, high):
let pivot = A[high]
let i = low-1
for j=low to high-1:
if A[j]<pivot:
i=i+1
swap A[i] with A[j]
swap A[i+1] with A[high]
return i+1
Since the partitioning step consists of at most n swaps, it takes linear time in the number of keys. As with mergesort, quicksort runs in O(nh) time, where h is the heigh of the recursion tree. The difficulty is that the heigh of the tree depends upon where the pivot element ends up in each partition. If we get lucky and happen to repeatedly pick the median element as our pivot, the subproblems are always half the size of the previous level, thus O(n lg n). Now suppose we get unlucky and our pivot element always splits the array as unequally as possible. This implies that the pivot element is always the biggest or smallest element in the sub-array, thus the worst case scenario is (n2)
Heapsort
Heapsort’s running time is O(n lg n). It operates in place, as insertion sort does. Heapsort introduces another algorithm design technique: using a data structure, the “heap”, to manage information.

For the heapsort algorithm, we use max-heaps. Min-heaps commonly implement priority queues.

Maintaining the heap property
The procedure MAX-HEAPIFY take as input an array A and an index i. When its called, MAX-HEAPIFY assumes that the binary trees rooted at LEFT(i) and RIGHT(i) are max-heaps, but that A[i] might be smaller than its children. MAX-HEAPIFY lets the value at A[i] “float down” in the max-heap so that the subtree rooted at index i obeys the max-heap property.

MAX-HEAPIFY(A, i):
l=LEFT(i)
r=RIGHT(i)
if lA.heapSize and A[l]>A[i]:
largest=l
else largest=i

    if rA.heapSize and A[r]>A[largest]:
    	largest=r

    if largesti:
    	exchange A[i] with A[largest]
    	MAX-HEAPIFY(A, largest)

6.2-1 Illustrate the operation of MAX-HEAPIFY(A, 3) on the array A=[27,17,3,16,13,10,1,5,7,12,4,8,9,0].

6.2-2 Starting with the procedure MAX-HEAPIFY, write pseudocode for the procedure MIN-HEAPIFY(A, i), which performs the corresponding manipulation on a min-heap. How does the running time of MIN-HEAPIFY compare to that of MAX-HEAPIFY?

MIN-HEAPIFY(A, i):
l=LEFT(i)
r=RIGHT(i)

if lA.heapSize and A[l]<A[i]:
smallest=l
else smallest = i

if rA.heapSize and A[r]<A[smallest]:
smallest=r

if smallesti:
swap A[i] with A[smallest]
MIN-HEAPIFY(A, smallest)

The running time of MIN-HEAPIFY is the same as the running time of MAX-HEAPIFY.

6.2-3 What is the effect of calling MAX-HEAPIFY(A, i) when the element A[i] is larger than its children?

Since the largest element is already at index i no arrangement is necessary in the heap, so calling the MAX-HEAPIFY function has no effect.

6.2-4 What is the effect of calling MAX-HEAPIFY(A, i) for i>A.heapSize/2?

There will be no effect since every value at any i>A.heapSize/2 is a leaf node in the binary heap tree. The statements conditions at lines 3 and 6 verify that the left and right index of the children of index i are out of the heap bounds, thus no code is executed.

Building a heap
The procedure MAX-HEAPIFY can be used in a bottom-up manner to convert an array A[1..n], where n=A.length, into a max-heap. As already seen, the elements in the subarray A[(⌊n/2⌋+1)..n] are all leaves of the tree. The procedure BUILD-MAX-HEAP goes through the remaining nodes of the tree and runs MAX-HEAPIFY on each one.

BUILD-MAX-HEAP(A):
A.heapSize=A.length
for i=⌊A.length/2] down to 1:
MAX-HEAPIFY(A, i)

Each call to MAX-HEAPIFY costs O(lg n) time, and BUILD-MAX-HEAP makes O(n) such calls

Techniques
Prefix Sum Array
A prefix sum array, also known as cumulative sum array, is a derived array that stores the cumulative sum of elements of a given array in O(n) time complexity. Each element in the prefix sum array represents the sum of all elements up to that index in the original array.

The uses of prefix sum are extensive. Here is a list of some of them:
To lexically compare strings of characters. For example, to determine that “strategy” should appear before “stratification” in a dictionary
To implement quicksort
Sliding Window
Involves selecting a fixed-size subset, or “window”, from a larger dataset and moving this window through the dataset in a setp-wise maner.
This technique is commonly used in algorithms like finding subarrays with a specific sum, finding the longest substring with unique characters, or solving problems that require a fixed-size window to process elements efficiently.
Required Time Complexity: O(n) or O(n log n)
