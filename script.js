"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data) {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const [language] = Object.values(data.languages);
  const currency = Object.values(data.currencies)[0].name;

  const html = ` <article class="country">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbor = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); //parsing returns an array of one object, so we destructure
    // get country 1
    renderCountry(data);

    // get country 2
    const [neighbor] = data.borders;
    if (!neighbor) return; // some countries will not have neighbor

    // AJAX call for country 2
    const request2 = new XMLHttpRequest();
    //alpha is to search for neighbor
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
  }); // waiting for event of data loading
};

getCountryDataAndNeighbor("ireland");
getCountryDataAndNeighbor("usa");
getCountryDataAndNeighbor("portugal");
// asynch functions, js will move on after each ajax call
