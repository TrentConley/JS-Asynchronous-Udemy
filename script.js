"using strict";

const whereAmI = function (lat, lng) {
  //create url
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url)
    .then(response => {
      // handle error
      if (!response.ok) throw new Error("Error connecting to API");
      return response.json();
      //will return result of promise response.json
    })
    .then(data => {
      console.log(data);
      if (!data) {
        throw new Error("There is no data.");
      }
      //  turn response into workable data, handle errors
      console.log(`You are in ${data.city}, ${data.country}`);
      //   const [data] = responseJSON;
    })
    .catch(err => {
      //our error object is stored in err
      console.log(`Something went wrong, ${err}`);
    });

  // use data to look at attributes in console
  //
  // then print something like "You are in Franklin, Tennessee" to the console.
  //
  // chain a .catch method to the end of the promise and log any errors
};
whereAmI(52.508, 13.381);
