// 1.Write a program to find whether a given year is a leap year or not.
//I tried to take the given year as input, but I failed. We weren't taught yet how to take input from the user in JS.
let given_year=2001
if(given_year%4==0){
    console.log("The given year is a leap year")
}
else
    console.log("The year isn't a leap year.")




//2.Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
//C2F--Celsius to Fahrenehit.
C2F= function(n){
    f=32+(1.8)*n
    return f
}
//F2C--Fahrenheit to Celsius.
F2C= function(n){
    c=(5*(n-32))/9
    return c
}




//3.Write a program to find the factorial of a number
function fact(n){
    if(n==1 || n==0){
        return 1
    }
    else
        return n*fact(n-1)
}
