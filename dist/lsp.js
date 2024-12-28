"use strict";
//* Wrong approach
// class Bird {
//   fly(): void {
//     console.log('Bird is flying.');
//   }
// }
// class Eagle extends Bird {
//   fly(): void {
//     console.log('Duck is flying.');
//   }
// }
// class Penguin extends Bird {
//   //* Penguins cannot fly, so this method is incorrect
//   fly(): void {
//     throw new Error('Penguins cannot fly!');
//   }
// }
// const duck = new Eagle();
// // Output: Duck is flying
// console.log(duck.fly())
// const penguin = new Penguin();
// //Output : Penguins cannot fly!
// console.log(penguin.fly())
//* Correct approach
class Bird {
    fly() {
        console.log('Bird is flying.');
    }
}
class Eagle extends Bird {
    fly() {
        console.log('Duck is flying.');
    }
}
class Penguin extends Bird {
}
const duck = new Eagle();
// Output: "Duck is flying
console.log(duck.fly());
const penguin = new Penguin();
// Output: Bird is flying
console.log(penguin.fly());
