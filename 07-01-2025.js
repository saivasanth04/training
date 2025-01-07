console.log(5+5);
console.log(100+1000);
console.log(10+"100");//concatenation
console.log(10+20+"Hi");
console.log("hi"+10+50);
console.log("hi"+(10+50));

console.log(10-5);
console.log("10"-5);//! typecasting
console.log("10"-"2");

console.log(5*5);
console.log(5*"5");//!typecasting

console.log(10/5);
console.log("10"/5);//!typecasting

console.log(2**5);
console.log(5**2);
console.log("5"**"5");//! TYPECASTING

console.log(10%2);
console.log("10"%5);//!tyepcSTING


let b = 10;
console.log(b);
console.log(++b);
console.log(b++);//!10
console.log(b);//!11

console.log(--b);//!9
console.log(b--);//!10
console.log(b);//!9

let a =10;
console.log(a+5);
console.log(a+=5); // ! a = a+5
console.log(a-=2);
console.log(a*=2);
console.log(a**=5);
console.log(a%=2);


console.log(10 == 10);
console.log("10" == 10);
console.log(100 == 10);
console.log("Hi" == "Hi");

console.log(10 === 10);
console.log("10" === 10);

console.log(10 != 5);
console.log(100 != "100");

console.log(10 !== 10);
console.log("10" !== 10);

console.log(10 > 6);
console.log(10 >= 10);
console.log(10 < 20);
console.log(20 <= 20);

console.log((10 > 5) && (5 > 10));

console.log((10 < 5) || (10 > 20));

console.log(!true);
console.log(!false);
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Even

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));


let greatest;
if (num1 >= num2 && num1 >= num3) {
  greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  greatest = num2;
} else {
  greatest = num3;
}
console.log(`Using if-else: The greatest number is ${greatest}`);


switch (true) {
  case (num1 >= num2 && num1 >= num3):
    console.log(`Using switch: The greatest number is ${num1}`);
    break;
  case (num2 >= num1 && num2 >= num3):
    console.log(`Using switch: The greatest number is ${num2}`);
    break;
  default:
    console.log(`Using switch: The greatest number is ${num3}`);
    break;
}