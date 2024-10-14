//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (age >= 0) {
      this._age = age;
    } else {
      console.error('Age must be a non-negative number.');
    }
  }
}
class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}
class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`)
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
