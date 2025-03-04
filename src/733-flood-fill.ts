/**
 * @see https://leetcode.com/problems/flood-fill/
 * 
 * An image is represented by an `m x n` integer grid image where `image[i][j]` represents the pixel value of the image.
 * You are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from
 * the pixel `image[sr][sc]`. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally
 * to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 * 
 * Return the modified image after performing the flood fill.
 * 
 * Constraints:
 * - m == image.length
 * - n == image[i].length
 * - 1 <= m, n <= 50
 * - 0 <= image[i][j], color < 2^16
 * - 0 <= sr < m
 * - 0 <= sc < n
 * 
 * Time and space complexity analysis:
 * 1) For time, it is O(N), where N is the number of pixels, since we might need to process every pixel.
 * 2) For space, it is also O(N), which is the implicit call stack size when calling `fill`.
*/
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const originalColor = image[sr][sc];
    
    if (originalColor != newColor) {
        fill(image, sr, sc, newColor, originalColor);
    }
    
    return image;
};

function fill(image: number[][], row: number, col: number, newColor: number, originalColor: number): void {
    if (row < 0 || row >= image.length) return;
    if (col < 0 || col >= image[0].length) return;
    if (image[row][col] === newColor) return;
    if (image[row][col] !== originalColor) return;
    
    image[row][col] = newColor;

    fill(image, row+1, col, newColor, originalColor);
    fill(image, row, col+1, newColor, originalColor);
    fill(image, row-1, col, newColor, originalColor);
    fill(image, row, col-1, newColor, originalColor);
}
