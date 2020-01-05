// This is just an example of using ES2015 syntax 
// To instantiate, use the keyword "new" //let firstStudent = new Student("Colt", "Steele");

// "class" keyword is a constant
// "class" are blueprints, that when created make objects known as "instances"
class Student {
    // The method to create new objects MUST be called "constructor"
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
    // Static method calls are made directly on the class and are not callable on instances of the class. 
    // Static methods are often used to create utility functions.
    static enrollStudents() {
        return "ENROLLING STUDENTS!!";
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

//console.log(firstStudent.addScore(98));
//console.log(firstStudent.addScore(76));
//console.log(firstStudent.calculateAverage());
//console.log(Student.enrollStudents());