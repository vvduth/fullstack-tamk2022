// exercise 3.1
function greet() {
  console.log("Hello there!");
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

const greetArrrowFuntion = () => {
  console.log("hello there");
};

const sumArrowFunction = (a: number, b: number, c: number) => {
  return a + b + c;
};

greetArrrowFuntion();
let b = sumArrowFunction(1, 2, 3);
console.log("ex 3,1 test result ", b);

// 3.2

const names = ["Lily12345566", "Aurelius", "Peter"];

function longestName(names: string[]): number {
  //your code here
  let namesLength: number[] = [];

  names.forEach((name: string) => {
    namesLength.push(name.length);
  });
  let maxLength: number = Math.max(...namesLength);
  return maxLength;
}

console.log("Ex 3.2 test result ", longestName(names));

// 3.3

const fiftyfifty = (): string => {
  let a = Math.floor(Math.random() * 10);
  if (a % 2 === 0) {
    return "Good morning from ex 3.3 " + a.toString();
  } else {
    return "Good afterrnoon form ex 3.3 " + a.toString();
  }
};

console.log(fiftyfifty());

// 3.4
const minMax = (min: number, max: number): number => {
  let a = Math.floor(Math.random() * (max - min)) + min;
  a % 2 === 0 ? console.log("it is even") : console.log("it is odd");

  return a;
};

const rand = minMax(1, 9);
console.log("Test 3.4 result ", rand);

// 3.5

const randArray = (arr: any[]): any => {
  let a = Math.floor(Math.random() * arr.length);
  return arr[a];
};

console.log("3.5 test result ", randArray(names));

// 3.6
const southamericans = ["Pele", "Maradona", "Messi"];
const europeans = ["Baggio", "Zidane", "Litmanen"];

const footballers = [...southamericans, ...europeans];
footballers.forEach((baller) => {
  console.log(baller);
});

// 3.7
let x, y, rest: number | number[];
[x, , y, , ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("x= ", x, " ; y= ", y);
console.log("Rest: ", rest);

// 3.8

interface Person {
  name: string;
  lastName: string;
  age?: number;
}
const person1: Person = {
  name: "Vilja",
  lastName: "Pelto",
};

const person2: Person = {
  name: "Miina",
  lastName: "Kentt??",
};

const people: Person[] = [];

people.push(person1, person2);

people.map((peron: Person) => {
  console.log("This is ex3.8 test output " + "Hello " + peron.name + "!");
});

// 3.9

const namesSib = ["Vivian", "Jaakko", "Maija"];
const people2: Person[] = namesSib.map(
  (name: string) =>
    ({
      name: name,
      lastName: "Pajunen",
      age: 21,
    } as Person)
);

console.log("3.9 family array output ", people2)