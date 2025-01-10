//higher order function and callback function
//higher order function
function hof(a){
    return a();
}
//call back function
let y=(function(){
    return "hello world"
})
console.log(hof(y));
let users=["sai","vasanth","teja","krishna","harshit","yuva"]
users.map((i)=>console.log(i));
/*
closure:-it is a memory created when functions are 
bundled together or nested each other by giving accessibilty 
to inner most function to access the variable of outer most function
*/ 
var a=10;
let b=45;
function x(){
    let user="vasanth";
    let company="Google";
    let salary=123456789
    console.log(user,company,salary,a,b);
}
x()
for(let i=0;i<5;i++){
    for(let j=5-i-1;j<5;j++){
        document.writeln("* ");
    }
   document.writeln("<br>");
}
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        document.writeln("* ");
    }
   document.writeln("<br>");
}
for(let i=0;i<5;i++){
    for(let j=0;(i+j)==5;j++){
        document.writeln("* ");
    }
   document.writeln("<br>");
}