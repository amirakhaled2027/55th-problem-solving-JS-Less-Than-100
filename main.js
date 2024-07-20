//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// num1 + num2 < 100 ......true;
// otherwise .....false;


function compareToo100(num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    } else {
        return false
    }
}
console.log(compareToo100(22, 15));
console.log(compareToo100(83, 34));
console.log(compareToo100(3, 77));