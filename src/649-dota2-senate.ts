/**
 * Description: @see https://leetcode.com/problems/dota2-senate/description/
 *
 * In the world of Dota2, there are two parties: the Radiant and the Dire.
 * The Dota2 senate consists of senators coming from two parties. Now the Senate
 * wants to decide on a change in the Dota2 game. The voting for this change is
 * a round-based procedure. In each round, each senator can exercise one of the
 * two rights:
 * - Ban one senator's right: A senator can make another senator lose all his
 * rights in this and all the following rounds.
 * - Announce the victory: If this senator found the senators who still have
 * rights to vote are all from the same party, he can announce the victory and
 * decide on the change in the game.
 *
 * Given a string senate representing each senator's party belonging. The
 * character `'R'` and `'D'` represent the Radiant party and the Dire party.
 * Then if there are `n` senators, the size of the given string will be `n`.
 *
 * The round-based procedure starts from the first senator to the last senator in
 * the given order. This procedure will last until the end of voting. All the
 * senators who have lost their rights will be skipped during the procedure.
 *
 * Suppose every senator is smart enough and will play the best strategy for his
 * own party. Predict which party will finally announce the victory and change the
 * Dota2 game. The output should be "Radiant" or "Dire".
 *
 * Constraints:
 * - `n == senate.length`
 * - `1 <= n <= 104`
 * - `senate[i] is either 'R' or 'D'.`
 *
 * Complexity Analisys
 * - Time complexity: Counting the number of each party takes `O(N)` and iterating
 * over the queue also takes `O(N)`, thus the time complexity is `O(N + N) = O(N)`.
 * - Space complexity: The queue will have at maximum `N` senators, thus `O(N)`.
 */
export function predictPartyVictory(senate: string): string {
  let direSenatorsCount = 0;
  let radiantSenatorsCount = 0;
  let banDireSenatorIndicator = 0;
  let banRadiantSenatorIndicator = 0;
  const senatorsQueue = [...senate];

  senatorsQueue.forEach((senator) => {
    if (senator === Party.DIRE) {
      direSenatorsCount++;
    } else {
      radiantSenatorsCount++;
    }
  });

  while (direSenatorsCount > 0 && radiantSenatorsCount > 0) {
    const currentVotingSenator = senatorsQueue.shift()!;

    if (currentVotingSenator === Party.DIRE) {
      if (banDireSenatorIndicator > 0) {
        banDireSenatorIndicator--;
        direSenatorsCount--;
      } else {
        banRadiantSenatorIndicator++;
        senatorsQueue.push(currentVotingSenator);
      }
    } else {
      if (banRadiantSenatorIndicator > 0) {
        banRadiantSenatorIndicator--;
        radiantSenatorsCount--;
      } else {
        banDireSenatorIndicator++;
        senatorsQueue.push(currentVotingSenator);
      }
    }
  }

  return direSenatorsCount > 0 ? "Dire" : "Radiant";
}

const enum Party {
  DIRE = "D",
  RADIANT = "R",
}
