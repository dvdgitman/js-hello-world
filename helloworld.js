class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  transgender() {
    if (this.sex == "male") {
      this.sex = "female";
    }
    else if (this.sex == "female"){
      this.sex = "male";
    }
    else {
      this.sex = "cocksi";
    }
  }
}

const maslanikov = new Person("Daniel Maslanikov", 29, "male");
console.log(maslanikov);
maslanikov.transgender()
console.log(maslanikov);
maslanikov.transgender()
console.log(maslanikov);


let killme = {
  name: "David",
  lastname: "Gitman",
  age: 16,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

console.log(killme.name)

killme.name = "fuckmedaddy"
killme.sayHello()