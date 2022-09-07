/* 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume(); */

class Cylinder{
    constructor(radius,height){
        this.radius=radius
        this.height=height
    }
    getVolume(){
        let a=(3.1415*this.radius*this.radius*this.height)
        console.log(parseFloat(a.toFixed(4)))
                }
}
class Sphere{
    constructor(radius){
        this.radius=radius
    }
    getVolume(){
        let a=((3.1415*4*this.radius*this.radius*this.radius)/3)
        console.log(parseFloat(a.toFixed(4)))
    }
}
class Cone{
    constructor(radius,height){
        this.radius=radius
        this.height=height
    }
    getVolume(){
        let a=((3.1415*this.radius*this.radius*this.height)/3)
        console.log(parseFloat(a.toFixed(4)))
    }
}
s1=new Cylinder(6,8)
s1.getVolume()
s2= new Sphere(5)
s2.getVolume()
s3=new Cone(6,9)
s3.getVolume()