// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.

class Person  {
consturctor (attributes) {
 this.myName = attributes.myName;
 this.age = attributes.age;
 this.hobby = attributes.hobby;
 this.properties = attributes.properties;

}
 
speak() {

    return `hello ${this.myName} , and iam ,${this.age}, ${this.hobby} , ${this.properties}`

}

}

class child extends Person {
  constructor(childAttributes){
  super(childAttributes)
  this.school = childAttributes.school;
}

}


const  dad = new Person ({
    myName: 'mohamed'
    age : '35 years old'
    hobby : 'sports'
    properties: 'calm person'

})



const son = new child ({
    myName: ' seraj'
    age :   '2 years'
    hobby : 'soccer'
    school : 'columbus toddler academy' 


})

console,log(dad.speak())
console.log(son.speak())





