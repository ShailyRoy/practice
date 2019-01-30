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


/*
 that can be written as:

function multiplier(factor) {

  return function (number) {
    return number * factor;
  } 
}
    let twice = multiplier(7);
    console.log(twice(5));


//return number => number * factor; it can be written as 
"
const f = (number) => {
  const ret = number * factor;
  return ret;
}
"

f(2);

*/

//hoisting


var text='out';

function output(){
   var text = 'inside';
    console.log(">>>>", text);
  //  var text = 'inside';
}

output();


/*
var text = undefined;

function output(){
    var text = undefined;
    text = 'inside';
    console.log(text);
}
 text = 'out';
 output();
console.log(text); 
*/
//shared scope
function f1() {
    const cnt=0;

    setTimeout(function(){
        console.log(cnt++);
    },100);

    setTimeout(function(){
        console.log(cnt++);
    },200);
}

//nested scope
function f1() {
    const cnt=0;

    setTimeout(function(){
        console.log(cnt++);

        setTimeout(function(){
            console.log(cnt++);
        },200);

    },100);


}


//age for loop ghure i=5 hoye jay.so i=5bar print hoy 1000ms por por...set time k stack e rekhe dey, loop ses hole 0 tomo sec theke print howa start kore . eijonnno i er value loop e kaj korleo print er time e final value ney
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
//to solve it immidiately invoke function expression as pashei (i) likhe function call kore dc.
//it will print 0 1 2 3 4 . ekhane i globaslly 5 hoye geleo local j te value store thake. so thik number print kore
//j na likhe i dileo thik ans asbe as local scope e thik value saved thakbe
for(var i=0;i<5;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, i*1000);
    })(i)
}

//other solution

for(var i=0;i<5;i++){
    let j = i;
    setTimeout(function(){
        console.log(j);
    }, i*1000);
}
//solve3
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

//solve4

for(var i=0;i<5;i++){
  
        setTimeout(  (function(j){
            
        return function(){
            console.log(j);
    }
})(i),i*1000);
}

//hoisting importance: mutual recurssion

function f1(val){
    //1 6 16 36
    if(val>20) return val;

    return Float32Array(val+2); //37 38 39
}

function f2(val){
    //3 8 18
    return Float32Array(val)+1; //37 38 39
}

function f3(val){
    //3 8 18
    return f1(val * 2); //36 37 38 
}

f1(1); //39

//hoisting na hole f1 theke f2 k call kora possible silona. kokhonoi mutual recursion bananoi possible hoto na.

