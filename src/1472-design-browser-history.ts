/**
 * @see https://leetcode.com/problems/design-browser-history/description/
 * Submission: https://leetcode.com/submissions/detail/917738445/
 *
 * You have a browser of one tab where you start on the homepage and you can
 * visit another url, get back in the history number of steps or move forward
 * in the history number of steps.
 *
 * Implement the BrowserHistory class:
 *
 * - `BrowserHistory(string homepage)` Initializes the object with the homepage of the browser.
 * - `void visit(string url)` Visits url from the current page. It clears up all the forward history.
 * - `string back(int steps)` Move steps back in history. If you can only return `x` steps in
 * the history and `steps > x`, you will return only `x` steps. Return the current url after
 * moving back in history at most steps.
 * - `string forward(int steps)` Move steps forward in history. If you can only forward `x` steps
 * in the history and `steps > x`, you will forward only x steps. Return the current url after
 * forwarding in history at most steps.
 *
 * Constraints:
 * - 1 <= homepage.length <= 20
 * - 1 <= url.length <= 20
 * - 1 <= steps <= 100
 * - `homepage` and `url` consist of  '.' or lower case English letters.
 * - At most 5000 calls will be made to visit, back, and forward.
 */

import { DoubleLinkedNode } from "../schema";

class BrowserHistory {
  private currentPage: DoubleLinkedNode;

  constructor(homepage: string) {
    this.currentPage = new DoubleLinkedNode(homepage);
  }

  visit(url: string): void {
    const node = new DoubleLinkedNode(url);
    this.currentPage.next = node;
    this.currentPage.next.previous = this.currentPage;
    this.currentPage = this.currentPage.next;
  }

  back(steps: number): string {
    let countdown = steps;

    while (this.currentPage.previous && countdown > 0) {
      this.currentPage = this.currentPage.previous;
      countdown--;
    }

    return this.currentPage.value;
  }

  forward(steps: number): string {
    let countup = 0;

    while (this.currentPage.next && countup < steps) {
      this.currentPage = this.currentPage.next;
      countup++;
    }

    return this.currentPage.value;
  }
}
