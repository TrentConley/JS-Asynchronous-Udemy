"using strict";
console.log(`hello world`);

const whereAmI = function (lat, lng) {
  //create url
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url)
    .then(response => response.json()) //response.json returns promise
    .then(responseJSON => {
      //  turn response into workable data, handle errors
      const [data] = responseJSON;
    });
  //response.json returns promise. that is why we need to add another promist.

  // use data to look at attributes in console
  //
  // then print something like "You are in Franklin, Tennessee" to the console.
  //
  // chain a .catch method to the end of the promise and log any errors
};
whereAmI(52.508, 13.381);
