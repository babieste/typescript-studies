/**
 * ### [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)
 *
 * Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.
 */
function createHelloWorld() {
  return function (...args: any): string {
    return "Hello World";
  };
}
