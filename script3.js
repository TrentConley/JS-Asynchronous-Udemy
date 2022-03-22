"using strict";
//simple lottery game to practice how promises work

//promise takes in executor function, executor function takes in resolve and reject functions
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("you win!"); //value we pass into resolve function will be value available for then method.
  } else {
    reject("you lose!");
  }
});
lotteryPromise
  .then(resultion => console.log(resultion))
  .catch(err => console.log(err));
