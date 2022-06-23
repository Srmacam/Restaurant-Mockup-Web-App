import React from 'react';
import {BillRow1} from './BillRow1';
import {BillRow2} from './BillRow2';

let orders = [
    {name: "Rare Steak", price: 4.00, stat: 0},
    {name: "Colored Water", price: 2.00, stat: 1},
    {name: "Cookie", price: 0.96, stat: 2},
    {name: "Canadian Burger", price: 100.00, stat: 3},
    {name: "Rare Steak", price: 4.00, stat: 3}
];

let countedOrders = [];
let subtotal = 0;

export class BillTable extends React.Component {

    render() {
        if (countedOrders.length === 0) {
            for (let i = 0; i < orders.length; i++) {
                let j = 0;
                subtotal += orders[i].price;

                // Using linear search because lazy
                for (; j < countedOrders.length; j++) {
                    if (countedOrders[j].name === orders[i].name) {
                        countedOrders[j].count++;
                        break;
                    }
                }
                // Not found, push it in
                if (j === countedOrders.length)
                    countedOrders.push({name: orders[i].name, count: 1, price: orders[i].price});
            }
        }
        return (
            <div className = "billTable">
                <BillRow1 />
                <BillRow2 subtotal={subtotal} countedOrders={countedOrders}/>
            </div>
            
        );
    }
}