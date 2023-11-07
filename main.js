import { team } from "./data.js";

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
};

export const cardsOnDom = (array) => {
    let domString = "";
    for (const member of array) {
        domString += `<div class="card" style="width: 18rem;">
      <img src="${member.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${member.name}</p>
        <button class="btn btn-danger" id="delete--${member.id}">Delete</button>
      </div>
    </div>`;
    }
    renderToDom("#app", domString);
};

const startApp = () => {
    cardsOnDom(team);
    // events(); // ALWAYS LAST
};

startApp();