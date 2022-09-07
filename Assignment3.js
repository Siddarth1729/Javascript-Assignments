/*1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10 */
count=1
str=""
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
            str+=" "+count
            count++
    }
    str+="\n"
}
console.log(str)


/*2. Write a program to find whether a given number is armstrong number or

not-*/
function armstrong(n){
    sum=0;temp=n
    while(n>0){
        rem=n%10
        sum+=(rem*rem*rem)
        n/=10
        n=Math.floor(n)
    }
    if(sum==temp)
        console.log("It's ARMSTRONG")
    else
        console.log("It's not Armstrong..")
}
armstrong(152)


/* 3. Write a program to find whether a given number is special number or

not-*/
function fact(n){
    if(n==0 || n==1)
        return 1
    return n*fact(n-1)
}
function special(n){
    sum=0;temp=n
    while(n>0){
        rem=n%10
        sum+=fact(rem)
        n/=10
        n=Math.floor(n)
    }
    if(sum==temp)
        console.log("It's SPECIAL!!")
    else
        console.log("It's not Special..")
}
special(145)
