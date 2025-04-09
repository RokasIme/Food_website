import { foodList } from "./pizza.js";
import { foodBlock } from "./foodBlock.js";

const currency = "Eur";

const foodListDOM = document.querySelector(".food-list");

let HTML = "";

for (const item of foodList) {
  HTML += foodBlock(item, currency);
}

foodListDOM.innerHTML = HTML;

import { menuList } from "./menulist.js";

const leftMenuDOM = document.querySelector(".left-menu");

let menuHTML = "";

for (const item of menuList) {
  menuHTML += `
    <div  style="color:${item.color};" "class="left-menu-item">
      <i class="${item.icon}"></i>
      <p>${item.name}</p>
    </div>
  `;
}

leftMenuDOM.innerHTML = menuHTML;

import { topMenuList } from "./topMenuList.js";

const topMenuDOM = document.querySelector(".top-menu");

let topMenuHTML = "";

for (const item of topMenuList) {
  topMenuHTML += `
  <p style="color:${item.color}; background-color:${item.back}">${item.name}</p>
`;
}

topMenuDOM.innerHTML = topMenuHTML;

import { orderList } from "./orderlist.js";

const orderItemsDOM = document.querySelector(".order-items");

let rightMenuHTML = "";

for (const item of orderList) {
  rightMenuHTML += `
          <div class="order-item">
            <img src="./img/pizza.webp" alt="pizza" />
            <div class="order-text">
              <h4>${item.name}</h4>
              <p>Crust:${item.crust}</p>
              <p>${item.price / 100} ${currency}</p>
              <p><span>-</span> ${item.quantity} <span>+</span></p>
            </div>
          </div>
          `;
}

orderItemsDOM.innerHTML = rightMenuHTML;
