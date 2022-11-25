/* 1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object. */
class Rectangle{
    constructor(a,b){
        this.a=a;this.b=b
    }
    area(){
        return this.a*this.b
    }
}
class Square extends Rectangle{
    superconstructor(a,b){
        this.a=a
        this.b=b
    }
}
s1=new Square(4,9)
console.log(s1.area())


/* 2) Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8. */
a=[3,45,6,7,23,5,7,8]
function find_largest(n){
    for(i=0;i<(a.length-1);i++){
        for(j=i+1;j<a.length;j++){
                if(a[i]>a[j]){
                    temp=a[i]
                    a[i]=a[j]
                    a[j]=temp
                }
        }
    }
    return a[a.length-n]
}
console.log(find_largest(3))


/*3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8. */
function computeDash(n){
    n=String(n)
    str=""
    function even(n){
        n=Number(n)
        if(n%2==0)
        return true
        else
        return false
    }
    j=0
    for(i of n){
        str+=i;
        j++;
        if(even(str[(str.length)-1]) && even(n[j])){
            str+="-"
        }
    }
    return str
}
console.log(computeDash(232244));
