function runningSum(nums: number[]): number[] {
    let sum = 0;
    return nums.map((num: number) => {
        sum = sum + num;
        return sum;
    });
};

export {}
