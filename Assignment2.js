//1.Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene
checkTriangle=function(a,b,c){
if(a==b & b==c)
    console.log("It's an Equilateral triangle.")
else if(a==b|b==c|c==a)
    console.log("It's an Isosceles triangle.")
else
    console.log("It's a scalene triangle.")
}
checkTriangle(9,5,9)


/*2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/
getGrade=function(marks){
    a=Math.floor(marks/10)
    switch(a){
        case 9:
            console.log("S grade")
            break
        case 10:
            console.log("S grade")
            break
        case 8:
            console.log("A grade")
            break
        case 7:
            console.log("B grade")
            break
        case 6:
            console.log("C grade")
            break
        case 5:
            console.log("D grade")
            break
        case 4:
            console.log("E grade")
            break
        case 3:
            console.log("Student has failed")
            break
        case 2:
            console.log("Student has failed")
            break
        case 1:
            console.log("Student has failed")
            break
        case 0:
            console.log("Student has failed")
            break
        default:                        
            console.log("INVALID MARKS")
    }
}
getGrade(90)


/*3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/
sum=0
for(i=1;i<1000;i++){
    if(i%3==0 | i%5==0){
        sum+=i
    }
}
console.log(sum)


/*4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100)*/
function fact(n){
    if(n==0|n==1){
        return 1
    }
    else
        return n*fact(n-1)
}
isPrime= function(n){
    flag=0
    for(i=2;i<n;i++){
        if(n%i==0)
            flag=1
            break
    }
    if(flag==0)
        return true
    else
        return false
}
function FactPrime(p,q){
    i=p
    while(i<=q){
        if(isPrime(i)){
            console.log(i+" :"+fact(i));
        }
        i+=1;
    }
}
FactPrime(1,10)
