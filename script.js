"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const [language] = Object.values(data.languages);
  const currency = Object.values(data.currencies)[0].name;

  const html = ` <article class="country ${className}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million people</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryDataAndNeighbor = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); //parsing returns an array of one object, so we destructure
    // get country 1
    renderCountry(data);

    // get country 2
    const neighbors = data.borders;
    // if (!neighbor) return; // some countries will not have neighbor
    for (const neighbor of neighbors) {
      // AJAX call for country 2
      const request2 = new XMLHttpRequest();
      //alpha is to search for neighbor
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
      request2.send();

      request2.addEventListener("load", function () {
        const [data2] = JSON.parse(this.responseText);
        renderCountry(data2, "neighbour");
      });
    }
  }); // waiting for event of data loading
};
*/

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      const neighbors = data.borders;
      for (const neighbor of neighbors) {
        fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
          .then(response => response.json())
          .then(([data]) => renderCountry(data, "neighbour"));
      }
      renderCountry(data);
    }); //request is promise
};
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

// getCountryDataAndNeighbor("ireland");
// getCountryDataAndNeighbor("usa");
// getCountryDataAndNeighbor("vietnam");
getCountryData("monaco");
// asynch functions, js will move on after each ajax call
