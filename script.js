"using strict";
console.log(`hello world`);

const whereAmI = function (lat, lng) {
  //create url
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url)
    .then(response => {
      const data = response.json();
      console.log(response, "here is resposne", data);
      if (data) return data;
    }) //response.json returns promise
    .then(data => {
      console.log(data);
      if (!data) {
        throw new Error("There is no data.");
      }
      //  turn response into workable data, handle errors
      const city = data.city;
      const country = data.country;
      console.log(`You are in ${city}, ${country}`);
      //   const [data] = responseJSON;
    })
    .catch(err => {
      //handel error
      console.log(`Something went wrong, ${err}`);
    });
  //response.json returns promise. that is why we need to add another promist.

  // use data to look at attributes in console
  //
  // then print something like "You are in Franklin, Tennessee" to the console.
  //
  // chain a .catch method to the end of the promise and log any errors
};
whereAmI(52.508, 13.381);
