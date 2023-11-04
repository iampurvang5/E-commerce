
var quantity_tab = document.querySelectorAll("#quantity");
var add_to_cart_btn = document.querySelectorAll("#add_to_cart");
var add_btn = document.querySelectorAll("#add_btn");

var cart_item_price = [];
var item_quantity = [];
var item_name = [];

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGmXs4U_IRWEUuL0JgtZ1KPQKP0bX1atk",
  authDomain: "e-commerce-website-ba095.firebaseapp.com",
  projectId: "e-commerce-website-ba095",
  storageBucket: "e-commerce-website-ba095.appspot.com",
  messagingSenderId: "630288328994",
  appId: "1:630288328994:web:74377418b305085a365d7b",
  measurementId: "G-NLTLSJPNTN"
};

const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

add_to_cart_btn.forEach((btn) => {
    console.log("here add");
    btn.addEventListener("click", function () {
        console.log("called");

        var card = this.parentElement;
        var card_body = card.parentElement;
        var card_img = card_body.parentElement;
        console.log(card);
        console.log(card_body);
        var after_btn=card.querySelector("#add_to_cart")
        after_btn.innerHTML="Added in cart";
        after_btn.style.backgroundColor="rgb(4, 92, 92)";
        after_btn.style.color="white";
        var unit_price = card.querySelector("#unit_price").innerHTML;
        var product_name = card_body.querySelector("#item").innerHTML;
        var quantity_value = card.querySelector("#quantity").value;
        var img = card_img.querySelector("img").src;
        var price = unit_price.split(".")[1];
        var subtotal = Number(price) * Number(quantity_value);

        sendMessage(img,product_name,unit_price,quantity_value,subtotal);


        item_name.push(product_name);
        cart_item_price.push(unit_price);
        item_quantity.push(quantity_value);

        console.log(cart_item_price);
        console.log(item_quantity);
        console.log(item_name);

        const myobject = { product_name: item_name, unit_price: cart_item_price, quantity_value: item_quantity };
        console.log(myobject);
        const myObjectString = JSON.stringify(myobject);
        localStorage.setItem('objectCart', myObjectString);

        document.getElementById("mycart").innerHTML =cart_item_price.length;

    });
});

function sendMessage(img,product_name,unit_price,quantity_value,subtotal) {
    const database = getDatabase();
    console.log("sendmassege");
    set(ref(database, 'items/' + Math.floor(Math.random() * 10000000)), {
      product_img:img,
      product_name: product_name,
      unit_price: unit_price,
      quantity: quantity_value,
      subtotal: subtotal,
    })
}





