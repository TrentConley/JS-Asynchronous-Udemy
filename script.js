"using strict";
console.log(`hello world`);

const whereAmI = function (lat, lng) {
  //create url
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url).then(response => {
    //  turn response into workable data, handle errors
    //
    // use data to look at attributes in console
    //
    // then print something like "You are in Franklin, Tennessee" to the console.
    //
    // chain a .catch method to the end of the promise and log any errors
  });
};
