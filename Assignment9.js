/*1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

The InnerFunction() is a closure as it can access the outerVariable  */

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
console.log((outerVariable))
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//4. Output of following closure ?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    console.log(i); // What is logged?
    }, 1000);
    }
    //The call back function is closure it has access to variable "i"