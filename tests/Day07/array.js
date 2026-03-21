
const nums = [2,4,5,2,1,2]

let count = 0;
let k = 2;

nums.filter((nums) => {
    if (nums === k) {
        count++;
    }
});

console.log(count);