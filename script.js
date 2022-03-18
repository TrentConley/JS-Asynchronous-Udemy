"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const request = new XMLHttpRequest();
const country = "peru";
request.open("GET", `https://restcountries.com/v3.1/name/{${country}}`);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText); //parsing returns an array of one object, so we destructure
  console.log(data);
}); // waiting for event of data loading
