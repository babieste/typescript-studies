/**
 * Description: @see https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 *
 * You are given an array of unique integers `salary` where `salary[i]` is the salary of the ith employee.
 *
 * Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of
 * the actual answer will be accepted.
 *
 * Constraints:
 * - `3 <= salary.length <= 100`
 * - `1000 <= salary[i] <= 10^6`
 * - All the integers of salary are unique.
 *
 * Complexity Analisys:
 *  - Time complexity: `O(n)`, we iterate over the array once.
 *  - Space complexity: `O(1)`, constant extra space is used.
 */

export function average(salary: number[]): number {
  const numberOfEmployees = salary.length;
  let salarySum = 0;
  let maximumSalary = Number.MIN_SAFE_INTEGER;
  let minimumSalary = Number.MAX_SAFE_INTEGER;

  salary.forEach((salary) => {
    if (salary > maximumSalary) {
      maximumSalary = salary;
    }

    if (salary < minimumSalary) {
      minimumSalary = salary;
    }

    salarySum += salary;
  });

  return (salarySum - maximumSalary - minimumSalary) / (numberOfEmployees - 2);
}
