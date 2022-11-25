//1. Can we put duplicate values in the set object ?
//We cannot duplicate any contents in a set.

/*2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object  */
a=new Set() /// creating new set
a.add(5)   // adding new element
a.delete(5)  // deleting an element

/* 3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */

b=new Set()
for(i=0;i<4;i++){
    b.add(Math.ceil(((Math.random())*10)))
}
console.log(b);
console.log(b.has(8));
