function countPairs(numbers, k) {
    // Write your code here
    let pairs = new Set();
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            let pair = [numbers[i], numbers[j]].sort((a, b) => a - b).toString();
            pairs.add(pair);
        }
    }

    const uniquePairs = Array.from(pairs).map(pair => pair.split(",").map(Number));
    let count = 0;

    uniquePairs.forEach((arr) => {
        const test = arr[0] + k;
        if (test === arr[1]) {
            count++;
        }
    });

    return count;

}

console.log(countPairs([1,1,2,2,3,3], 1));