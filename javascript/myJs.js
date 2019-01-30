/*
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

for(let num=0;num<6;num++)
{
    let s="";
    for(let num2 = 0;num2<=num;num2++)
    s=s+"*";
    console.log(s);
}

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
console.log(power(2, 10));

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
// → 60
}
// y is not visible here
console.log(x + z);
*/
//arrow function
const horn = () => {
    console.log("Toot");
    };
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
console.log(power(2,4));
horn();
//closure
function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(7);
    console.log(twice(5));

//hoisting

var text = 'out';
var text = 'ot';

function output(){
    var text = 'inside';
    console.log(text);
  //  var text = 'inside';
}

output();
console.log(text); 

/*
var text = undefined;
var text = undefined;

function output(){
    var text = undefined;
    text = 'inside';
    console.log(text);
}
 text = 'out';
 text = 'ot';
 output();
console.log(text); 
*/
/*
var name 
*/