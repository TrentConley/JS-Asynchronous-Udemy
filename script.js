"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const request = new XMLHttpRequest();
const country = "peru";
request.open("GET", `https://restcountries.com/v3.1/name/{${country}}`);
request.send();
