// Create filter method for string prototype that filters out 
// array of words from a given string.
String.prototype.filter = function(arr) {
    return this.split(" ").filter(val => !arr.includes(val)).join(" ");
}

// Implement the bubble sort for array.prototype
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < this.length - 1; j++) {
            if (this[j] > this[j + 1]) {
                swapped = true;
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
        if (!swapped) 
            return;
    }
}

// Create an object called Teacher derived from the 
// Person class, and implement a method called teach 
// which receives a string called subject, and returns:
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

function Teacher() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

let teacher = new Teacher();
teacher.initialize("Nehemiah", 27);
teacher.teach("Inheritance");