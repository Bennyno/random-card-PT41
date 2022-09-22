/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardValue.innerHTML = values[generateRandomNumber(0, values.length - 1)];
  generateRandomSuit();
}; //   //write your code here
let suit = document.querySelector(".suit");
let suit2 = document.querySelector(".suit2");
let cardValue = document.querySelector(".cardValue");

let values = [
  "A",
  "J",
  "Q",
  "K",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
let suits = ["&#9824;", "&#9829;", "&#9827;", "&#9830;"];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomSuit() {
  let cardSuit = suits[generateRandomNumber(0, suits.length - 1)];
  suit.innerHTML = cardSuit;
  suit2.innerHTML = cardSuit;
}
const button = document.querySelector("button");
button.onclick = () => {
  window.location.reload();
};
