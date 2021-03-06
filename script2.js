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
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => {
      //our error object is stored in err
      console.log(`Something went wrong, ${err}`);
    });
};
whereAmI(52.508, 13.381);
