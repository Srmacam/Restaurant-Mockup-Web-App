import React from 'react';
import {FoodItem} from './FoodItem';

let items = [
  [
    {name: "Rare Steak", price: 4, soldOut: false},
    {name: "Medium-Rare Steak", price: 20, soldOut: false},
    {name: "Medium Steak", price: 6.9, soldOut: false}, 
    {name: "Medium-Well Steak", price: 69.69, soldOut: false},  
    {name: "Well-Done Steak", price: 420.69, soldOut: false}, 
    {name: "Charcoal", price: 0.01, soldOut: false}
  ],
  [
    {name: "Bacon Burger", price: 169, soldOut: false}, 
    {name: "Canadian Burger", price: 100, soldOut: false}, 
    {name: "Pork Burger", price: 10, soldOut: false}, 
    {name: "Burger Combo", price: 1, soldOut: false},  
    {name: "Meat Burger", price: 0.10, soldOut: false}, 
    {name: "A Sandwich", price: 0.01, soldOut: true}
  ],
  [
    {name: "Potato", price: 1, soldOut: false}, 
    {name: "Baked Potato", price: 2, soldOut: false}, 
    {name: "Fried Potato", price: 3, soldOut: false}, 
    {name: "Potato Chip", price: 4, soldOut: true},  
    {name: "Fried French", price: 5, soldOut: false}, 
    {name: "Healthy Potato", price: 69, soldOut: false}
  ],
  [
    {name: "Water", price: 0, soldOut: false}, 
    {name: "Flavored Water", price: 1, soldOut: true}, 
    {name: "Colored Water", price: 2, soldOut: false}, 
    {name: "Carbonated Water", price: 3, soldOut: false},  
    {name: "Lemon Water", price: 4, soldOut: false}, 
    {name: "Milk", price: 69, soldOut: false}
  ],
  [
    {name: "Chocolate Cake", price: 0.42, soldOut: true}, 
    {name: "Cheesecake", price: 0.24, soldOut: false}, 
    {name: "Fruit Cake", price: 0.69, soldOut: false}, 
    {name: "Cookie", price: 0.96, soldOut: false},  
    {name: "Pizza", price: 0.99, soldOut: true}, 
    {name: "French Fry", price: 0.01 , soldOut: false}
  ]
];

function moneyFormat(cost) { return "$" + parseFloat(Math.round(cost * 100) / 100).toFixed(2); }

export class Categories extends React.Component {
    constructor(props) {
      super(props);
      this.state = { category: 0,  bill: 0};
      this.toEntrees = this.toEntrees.bind(this);
      this.toBurgers = this.toBurgers.bind(this);
      this.toSides = this.toSides.bind(this);
      this.toDrinks = this.toDrinks.bind(this);
      this.toDesserts = this.toDesserts.bind(this);
      this.buy = this.buy.bind(this);
    }

    toEntrees() { this.setState({category: 0}); }
    toBurgers() { this.setState({category: 1}); }
    toSides() { this.setState({category: 2}); }
    toDrinks() { this.setState({category: 3}); }
    toDesserts() { this.setState({category: 4}); }

    buy(cost) {
      let currBill = this.state.bill;
      let newBill = currBill + cost;
      this.setState({ bill: newBill});
    }

    render() {
        let soldOutImg = "../images/sold_out.png";
        return (
          <div className = "row">
            <div className="left">
              <h2 id="cat1" className="category" onClick={this.toEntrees}> Entrees </h2>
              <h2 id="cat2" className="category" onClick={this.toBurgers}> Burgers </h2>
              <h2 id="cat3" className="category" onClick={this.toSides}> Sides </h2>
              <h2 id="cat4" className="category" onClick={this.toDrinks}> Drinks </h2>
              <h2 id="cat5" className="category" onClick={this.toDesserts}> Desserts </h2>
              <div className="bill">
                <p id="totalBill"> Estimated bill: {moneyFormat(this.state.bill)} </p>
              </div>
            </div>
            <FoodItem id="testItem" item={items[this.state.category][0]} category={this.state.category} onBuy={this.buy}/>
            <FoodItem item={items[this.state.category][1]} category={this.state.category} onBuy={this.buy}/>
            <FoodItem item={items[this.state.category][2]} category={this.state.category} onBuy={this.buy}/>
            <FoodItem item={items[this.state.category][3]} category={this.state.category} onBuy={this.buy}/>
            <FoodItem item={items[this.state.category][4]} category={this.state.category} onBuy={this.buy}/>
            <FoodItem item={items[this.state.category][5]} category={this.state.category} onBuy={this.buy}/>
          </div>
        );
    }
}

/*
            <div className="row">
              <div className="left">
                <h2 className="category" onClick={() => this.changeCategory(0)}> Entrees </h2>
                <h2 className="category" onClick={() => this.changeCategory(1)}> Burgers </h2>
                <h2 className="category" onClick={() => this.changeCategory(2)}> Sides </h2>
                <h2 className="category" onClick={() => this.changeCategory(3)}> Drinks </h2>
                <h2 className="category" onClick={() => this.changeCategory(4)}> Desserts </h2>
                <div className="bill">
                  <p id="totalBill"> Estimated bill: <br /> {this.props.bill} </p>
                </div>
              </div>
            </div>
            */

/*
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
*/