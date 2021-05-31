/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window object is the Global Object in the Browser. Any Global Variables or Functions can be accessed as properties of the window object.
* 2. is applied when you invoke a function in an Object using the dot notation. this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot
* 3. Whenever we use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function
* 4. In this method, you can force a function to use a certain object as its this . Explicit Binding can be applied using call(), apply(), and bind(). call(): Pass in the required object as the first parameter during the function call
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
sayName("abdirahman");
// Principle 2

// code example for Implicit Binding

const student = {
    name: "abdi",
    city: "burco",
    SayHi: function(){
        console.log(`Hi, my name is ${this.name}`)
    }
}
student.SayHi();
// Principle 3

// code example for New Binding
const abdi= new person({
    age:15,
    myname:'abdi',
    hometown:'burco',
})
console.log(abdi.speak())
// Principle 4

// code example for Explicit Binding
function arday(){
    console.log(this.myname)
}
const ardaygakowaad = {
    myname: "khadar",
    location: "burco"
}
arday.call(ardaygakowaad);