"use strict";

//1:

class Person {
    constructor(firstName,lastName,age,birthDayDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }
      celebrate(){
          return "Happy Birthday, let’s celebrate";
      }
}
const person = new Person("Darina","Solovei",26,"1995-01-02");
console.log(person);
console.log(person.celebrate());




class Employee extends Person {

    constructor(firstName,lastName,age, birthDayDate, jobPosition, salary) {
        super(firstName,lastName,age, birthDayDate);
        this.jobPosition = jobPosition;
        this._salary = salary;
    }
    get calculateYearSalary (){
        return this._salary *12;
    }
    celebrate(){
          let day = new Date(this.birthDayDate);
          if (day.getDay() === 0 || day.getDay() === 6){
            return "Happy Birthday, let’s celebrate";
          } else return "Happy Birthday, but I need to work"
        }
    }

const employee = new Employee("Ivan", "Ivanov", 28,"1993-02-25", "manager", 25000);
console.log(employee);
console.log(employee.celebrate());


