import React from 'react';

function moneyFormat(cost) { return "$" + parseFloat(Math.round(cost * 100) / 100).toFixed(2); }

export class FoodItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    minus() {
        let newCount = this.state.count-1;
        if (newCount >= 0) this.setState({ count: newCount });
    }

    plus() {
        let newCount = this.state.count+1;
        this.setState({ count: newCount });
    }

    handleBuy() {
        const cCount = this.state.count;
        if (this.props.item.soldOut) {
            alert("Sorry! This item is unavailable.");
            return;
        }
        if (cCount === 0) {
            alert("Please order at least 1 item.");
            return;
        }
        const cPrice = this.props.item.price;
        const currTotal = cCount * cPrice;
        this.props.onBuy(currTotal);
        this.setState({ count: 0 });
    }

    render() {
        let order = this.props.item;
        let catClass;
        if (order.soldOut) catClass = "img out";
        else {
            switch (this.props.category) {
                case 0:
                    catClass = "img entree";
                    break;
                case 1:
                    catClass = "img burger";
                    break;
                case 2:
                    catClass = "img side";
                    break;
                case 3:
                    catClass = "img drink";
                    break;
                case 4:
                    catClass = "img dessert";
                    break;
                default:
                    catClass = "img entree";
                    alert("Error with category");
            }
        }

        return (
            <div className="column">
                <div className="food">
                    <div>{order.name}</div>
                    <div id="testCat" className={catClass}></div>
                    <div className="bar">
                        <div className="num"> {this.state.count} </div>
                        <button className="minus" onClick={this.minus}> - </button>
                        <button className="plus" onClick={this.plus}> + </button>
                        <div className="price" > {moneyFormat(order.price)} </div>
                        <button className="confirm" onClick={this.handleBuy}> &#10004; </button>
                    </div>
                </div>
            </div>
        );
    }
}

FoodItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    category: React.PropTypes.number,
    onBuy: React.PropTypes.func.isRequired
};

FoodItem.defaultProps = { category: 0 };



/*
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
*/