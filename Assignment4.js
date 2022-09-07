/* Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step.*/
function matchHouses(n){
    if(n==1)
        return 6
    return 6+(n-1)*5
}
console.log(matchHouses(87))