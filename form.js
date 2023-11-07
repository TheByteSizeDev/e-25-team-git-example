import { team } from "./data.js";
import { cardsOnDom } from "./main.js";

// 1. select/target the form on the DOM
const form = document.querySelector("form");

// 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate
const createMember = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  const newMemberObj = {
    id: team.length + 1,
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    favoriteColor: document.querySelector("#favoriteColor").value,
    image: document.querySelector("#image").value,
  };

  team.push(newMemberObj);
  cardsOnDom(team);
  form.reset();
};

// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener("submit", createMember);
