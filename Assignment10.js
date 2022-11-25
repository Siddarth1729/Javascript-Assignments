/*1. Are Higher Order functions and Call back functions the same ? If not,
briefly explain about both functions.
Higher order function is the function which calls the Call back Function*/

/* 2. Is filter a Higher Order function in Javascript ? If yes, why ?
filter is a method used on arrays which accepts a function as a parameter. 
So it is a Higher order function. */

/* 3. Give an example of a Higher Order function and a call back function
used in the same program. */
function sum(a,b,callback){
    s=a+b;
    callback(s)
}
function print(n){
    console.log("Printing",n);
}
sum(4,5,print)
/* Here Sum is the higher order function and callback is the Callback function*/

/*4. Carefully check the example below:
a) What will be the output of this program ?
b) Which function is a Higher Order function here ?*/

const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

/* useFunction() is the higher order function and fn is the callback function*/