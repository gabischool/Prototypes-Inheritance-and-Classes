// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.


class Person {
    constructor(familyMember){
        this.name = familyMember.name;
        this.Age = familyMember.Age;
        this.Hobby = familyMember.Hobby;
    }
    
    Speak (){
        return `Hello, my name is ${this.name} and I am ${this.Age } years old. I love ${this.Hobby}`
    }
}

class Child extends Person{
    constructor(children){
        super(children)

    }
}


const dad = new Person ({
    name:'abdi',
    Age:46, 
    Hobby:"Reading Qurran"
});

const FirstSon = new Child ({
    name:'Zakaria',
    Age:23, 
    Hobby:"Reading Qurran"
});

const secondSon = new Child ({
    name:'abdirashid',
    Age:22, 
    Hobby:"Reading Qurran"
});
const firstDaughter = new Child ({
    name:'ayaan',
    Age:12, 
    Hobby:"Reading Qurran"
});






console.log(dad.Speak());
console.log(FirstSon.Speak());
console.log(secondSon.Speak());
console.log(firstDaughter.Speak());
