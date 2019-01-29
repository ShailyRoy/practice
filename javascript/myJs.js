function factorial(n) {
    if (n == 0) {
    return 1;
    } else {
    return factorial(n - 1) * n;
    }
    }

    console.log(factorial(8));
    console.log(8 * null);

    let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
console.log(Math.min(2, 4) + 100);

let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}


for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
    }