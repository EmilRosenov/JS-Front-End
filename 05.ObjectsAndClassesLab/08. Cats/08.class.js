function solve(arr) {
  let cats = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let line of arr) {
    let [name, age] = line.split(" ");
    cats.push(new Cat(name, age));
  }

  cats.forEach((element) => {
    element.meow();
  });
}

// }

solve(["Candy 1", "Poppy 3", "Nyx 2"]);
