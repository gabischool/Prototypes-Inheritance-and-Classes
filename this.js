/* 
The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.


*
* 1. Window  Binding = "this" keyword tells us where and  what it points which is usually being an in the window object.
* 2. Implicit Binding ="look at the left of the dot which calls for the referrence  object. 80% usage in the web Devement, and it should use it on objects with methods"
* 3. Explicit Binding = it uses "call" in  most cases to connect the two thing, it rarely be used, it immediately and automatically invokes the fucntion. it takes argument.
* 4. new Binding = it uses the "new" keyword and it creates the new object from constructed object and poinst to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function logThis() {
    console.log( this)
  }


// Principle 2

// code example for Implicit Binding
var myInfo = {
    name:"zack",
    Age:23,
    sayMyInfo: function(){
        console.log(this.name);
    }
};

 myInfo.sayMyInfo();//outpu = "zack"
// Principle 3

// code example for New Binding

function States (name, location){
    this.name = name;
    this.location =location;

}
const stateOne = new States("ohio", "USA");
console.log(stateOne.location);
console.log(stateOne.name);



// Principle 4

// code example for Explicit Binding

function person (){
    console.log(this.name);
}

const personOne = {
    name:"abdi"
}


const personTwo = {
    name:"mahdi"
}

person.call(personOne)