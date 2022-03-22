"using strict";
//simple lottery game to practice how promises work

//promise takes in executor function, executor function takes in resolve and reject functions
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`lottery draw happening!`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("you win!"); //value we pass into resolve function will be value available for then method.
    } else {
      reject("you lose!");
    }
  }, 00);
});
lotteryPromise
  .then(resultion => console.log(resultion))
  .catch(err => console.log(err));
console.log("hi there");

//promisifying --> wrap up old callback behavior to promise behavior

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2).then(() => console.log(`Waited for 2 seconds`));
console.log(`hello world`);
