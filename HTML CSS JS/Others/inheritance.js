class Animal{
  constructor(name){
    this.name = name;
  }
  speak(){
    return this.name +` make noise`;
  }
}

class Dog extends Animal{
  constructor(name, action){
    super(name);
    this.act = action;
  }
  bark(){
    return this.speak() +', and ' +this.name +' '+this.act;
  }
}
let dog = new Dog("Tommy", "bark");

dog.bark();
console.log(dog.bark());
