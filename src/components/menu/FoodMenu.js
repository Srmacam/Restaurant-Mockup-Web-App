import React from 'react';
import { TopNav } from '../common/Topnav';
import { Chatbar } from '../common/Chatbar';
import {FoodMenuTable} from './FoodMenuTable';

class FoodMenu extends React.Component {

    render() {
        return (
            <div className="menuBG">
              <TopNav />
              <FoodMenuTable />
              <Chatbar />
            </div>
        );
    }
}

export default FoodMenu;

/*
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width" />
<link type=text/css rel="stylesheet" href="css/foodmenu.css">
<link type=text/css rel="stylesheet" href="css/menuBar.css">
<link type=text/css rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"> <!-- solely used for font -->
<title> Menu - Diner Duo </title>
<style> body{font-family: "Lato", sans-serif;} </style>

<script type="text/javascript">

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var orders = [[],[],[],[],[],[]]; // 6 Tables = 6 inner arrays
var currOrders = [];

var items = [
  [
    {name: "Rare Steak", price: 4, soldOut: false}, 
    {name: "Medium-Rare Steak", price: 20, soldOut: false}, 
    {name: "Medium Steak", price: 6.9, soldOut: false}, 
    {name: "Medium-Well Steak", price: 69.69, soldOut: false},  
    {name: "Well-Done Steak", price: 420.69, soldOut: false}, 
    {name: "Charcoal", price: 0.01, soldOut: false}, 
  ],
  [
    {name: "Bacon Burger", price: 169, soldOut: false}, 
    {name: "Canadian Ham Burger", price: 100, soldOut: false}, 
    {name: "Pork Burger", price: 10, soldOut: false}, 
    {name: "Burger Combo", price: 1, soldOut: false},  
    {name: "Meat Burger", price: 0.10, soldOut: false}, 
    {name: "A Sandwich", price: 0.01, soldOut: true}, 
  ],
  [
    {name: "Potato", price: 1, soldOut: false}, 
    {name: "Baked Potato", price: 2, soldOut: false}, 
    {name: "Fried Potato", price: 3, soldOut: false}, 
    {name: "Potato Chip", price: 4, soldOut: true},  
    {name: "Fried French", price: 5, soldOut: false}, 
    {name: "Healthy Potato", price: 69, soldOut: false}, 
  ],
  [
    {name: "Water", price: 0, soldOut: false}, 
    {name: "Flavored Water", price: 1, soldOut: true}, 
    {name: "Colored Water", price: 2, soldOut: false}, 
    {name: "Carbonated Water", price: 3, soldOut: false},  
    {name: "Lemon Water", price: 4, soldOut: false}, 
    {name: "Milk", price: 69, soldOut: false}, 
  ],
  [
    {name: "Chocolate Cake", price: 0.42, soldOut: true}, 
    {name: "Cheesecake", price: 0.24, soldOut: false}, 
    {name: "Fruit Cake", price: 0.69, soldOut: false}, 
    {name: "Cookie", price: 0.96, soldOut: false},  
    {name: "Pizza", price: 0.99, soldOut: true}, 
    {name: "French Fry", price: 0.01 , soldOut: false}, 
  ]
];

var count = [0, 0, 0, 0, 0, 0];
var price = [4, 20, 6.9, 69.69, 420.69, 0.01];
var soldOut = [false, false, false, false, false, false];
var totalCost = 0;
var currCat = 0;

// From https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
function moneyFormat(cost) { return "$" + parseFloat(Math.round(cost * 100) / 100).toFixed(2); }

function changeCategory(category) {
  currCat = category;
  count = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 6; i++) {
      price[i] = items[category][i].price;
      soldOut[i] = items[category][i].soldOut;
      document.getElementById("name"+i).innerHTML = items[category][i].name;
      document.getElementById("price"+i).innerHTML = moneyFormat(items[category][i].price);
      document.getElementById("count"+i).innerHTML = 0;
      switch(category) {
          case 0: 
            document.getElementById("img"+i).style.backgroundImage = "url('images/entree.jpg')";
            break;
          case 1: 
            document.getElementById("img"+i).style.backgroundImage = "url('images/order3.jpg')";
            break;
          case 2: 
            document.getElementById("img"+i).style.backgroundImage = "url('images/side.jpg')";
            break;
          case 3: 
            document.getElementById("img"+i).style.backgroundImage = "url('images/drink.jpg')";
            break;
          case 4: 
            document.getElementById("img"+i).style.backgroundImage = "url('images/dessert.jpg')";
            break;
      }
      document.getElementById("img"+i).style.backgroundSize = "cover";
      document.getElementById("img"+i).style.backgroundPosition = "center";
      if (items[category][i].soldOut) noFood(i);
    }
}

function noFood(id) {
  document.getElementById("img"+id).style.backgroundImage = "url('images/sold_out.png')";
  document.getElementById("img"+id).style.backgroundSize = "175px";
  document.getElementById("img"+id).style.backgroundPosition = "center";
}

function plus(id) { 
  count[id]++;
  document.getElementById("count"+id).innerHTML = count[id]; 
}

function minus(id) {
  if (count[id] >= 1) count[id]--; 
  document.getElementById("count"+id).innerHTML = count[id];
}

function addToOrder(id) {
  if (soldOut[id] === true) { 
    alert("Sorry! This item is not available.");
    count[id] = 0;
    document.getElementById("count"+id).innerHTML = 0;
  }
  else if (count[id] === 0) alert("Please add an item before confirming your order.");
  else {
    totalCost = totalCost + count[id] * price[id];

    // Overwrite current order from localstorage
    for (c = 0; c < count[id]; c++) {
      let order = {name: items[currCat][id].name, price: price[id], stat: 0};
      currOrders.push(order);
    }

    let sessID = sessionStorage.getItem("sessID");
    orders[JSON.parse(sessID)] = currOrders;
    localStorage.setItem('orders', JSON.stringify(orders));

    count[id] = 0;
    document.getElementById("totalBill").innerHTML = "Estimated bill: <br> " + moneyFormat(totalCost);
    document.getElementById("totalBillMobile").innerHTML = "Estimated bill: <br> " + moneyFormat(totalCost);
    document.getElementById("count" + id).innerHTML = count[id];
  }
}


function loadPage() {
  let storedOrders = localStorage.getItem("orders");
  if (storedOrders !== null) { 
    orders = JSON.parse(storedOrders);
    let sessID = sessionStorage.getItem("sessID");
    if (!sessID) {
        alert("BUG with 'sessID'"); 
        return;
    }
    currOrders = orders[sessID];
    for (c = 0; c < currOrders.length; c++) {
      totalCost += currOrders[c].price;
    }
    document.getElementById("totalBill").innerHTML = "Estimated bill: <br> " + moneyFormat(totalCost);
    document.getElementById("totalBillMobile").innerHTML = "Estimated bill: <br> " + moneyFormat(totalCost);
  }
  changeCategory(0); 
}


window.onload = loadPage;


* Originally commented out *
-----------------------------------------------------
let alreadyCalled = false;

window.onunload = window.onbeforeunload = function(){
if(!alreadyCalled){
  alreadyCalled = true;
  
  }
};
------------------------------------------------------


</script>

<body>
<div>
  <div class=topnav>
    <a class=dropdown href="javascript:void(0)" onclick="openNav()">&#9776;</a>
  </div>

  <div class=mobile>
    <div class=row>
      <div class=left>
        <br><p id=totalBillMobile> Estimated bill: <br> $0.00 </p><br>
        <a href="foodmobile.html"><h2 class=category> Entrees </h2></a>
        <a href="foodmobile.html"><h2 class=category> Burgers </h2></a>
        <a href="foodmobile.html"><h2 class=category> Sides </h2></a>
        <a href="foodmobile.html"><h2 class=category> Drinks </h2></a>
        <a href="foodmobile.html"><h2 class=category> Desserts </h2></a>
        <div class="bill">
        </div>
      </div>
    </div>
  </div>

  <div class=table>
    <div class="row top">
      <div class=left>
        <h1 class=headers> Categories </h1>
      </div>
    </div>
    <div class=row>
      <div class=left>
        <h2 class=category onclick="changeCategory(0)"> Entrees </h2>
        <h2 class=category onclick="changeCategory(1)"> Burgers </h2>
        <h2 class=category onclick="changeCategory(2)"> Sides </h2>
        <h2 class=category onclick="changeCategory(3)"> Drinks </h2>
        <h2 class=category onclick="changeCategory(4)"> Desserts </h2>
        <div class="bill">
          <p id=totalBill> Estimated bill: <br> $0.00 </p>
        </div>
      </div>
      <div class="column">
          <div class="food" id=food0>
              <div id=name0>Rare Steak</div>
              <div class="img entree" id=img0></div>
              <div class=bar>
                <div class=num id=count0> 0 </div>
                <button class=minus onclick="minus(0)"> - </button>
                <button class=plus onclick="plus(0)"> + </button>
                <div class=price id=price0> $4.00 </div>
                <button class=confirm onclick="addToOrder(0)"> &#10004; </button>
              </div>
          </div>
      </div>
      <div class="column">
          <div class="food">
              <div id=name1>Medium-Rare Steak</div>
              <div class="img entree" id=img1></div>
              <div class=bar>
                <div class=num id=count1> 0 </div>
                <button class=minus onclick="minus(1)"> - </button>
                <button class=plus onclick="plus(1)"> + </button>
                <div class=price id=price1> $20.00 </div>
                <button class=confirm onclick="addToOrder(1)"> &#10004; </button>
              </div>
          </div>
      </div>
      <div class="column">
          <div class="food">
              <div id=name2>Medium Steak</div>
              <div class="img entree" id=img2></div>
              <div class=bar>
                <div class=num id=count2> 0 </div>
                <button class=minus onclick="minus(2)"> - </button>
                <button class=plus onclick="plus(2)"> + </button>
                <div class=price id=price2> $6.90 </div>
                <button class=confirm onclick="addToOrder(2)"> &#10004; </button>
              </div>
          </div>
      </div>
      <div class="column">
          <div class="food">
              <div id=name3>Medium-Well Steak</div>
              <div class="img entree" id=img3></div>
              <div class=bar>
                <div class=num id=count3> 0 </div>
                <button class=minus onclick="minus(3)"> - </button>
                <button class=plus onclick="plus(3)"> + </button>
                <div class=price id=price3> $69.69 </div>
                <button class=confirm onclick="addToOrder(3)"> &#10004; </button>
              </div>
          </div>
      </div>
      <div class="column">
          <div class="food">
              <div id=name4>Well-Done Steak</div>
              <div class="img entree" id=img4></div>
              <div class=bar>
                <div class=num id=count4> 0 </div>
                <button class=minus onclick="minus(4)"> - </button>
                <button class=plus  onclick="plus(4)"> + </button>
                <div class=price id=price4> $420.69</div>
                <button class=confirm onclick="addToOrder(4)"> &#10004; </button>
              </div>
          </div>
      </div>
      <div class="column">
          <div class="food">
              <div id=name5>Charcoal</div>
              <div class="img entree" id=img5></div>
              <div class=bar>
                <div class=num id=count5> 0 </div>
                <button class=minus onclick="minus(5)"> - </button>
                <button class=plus onclick="plus(5)"> + </button>
                <div class=price id=price5> $0.01 </div>
                <button class=confirm onclick="addToOrder(5)"> &#10004; </button>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>

<div class="chatbar">
  <a href="chatmockup.html">Chat</a>
</div>

<!-- sidenav (code from W3Schools) -->
<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="SecondPage.html">Home</a>
    <a href="foodmenu.html">Menu</a>
    <a href="ProgressPage.html">Progress</a>
    <a href="BillPage.html">Bill</a>
</div>
</body>
</html>
*/