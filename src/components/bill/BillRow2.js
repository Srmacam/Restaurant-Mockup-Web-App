import React from 'react';
import {BillItem} from './BillItem';
import {BillCount} from './BillCount';


function moneyFormat(cost) { return "$" + parseFloat(Math.round(cost * 100) / 100).toFixed(2); }

export class BillRow2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: this.props.subtotal };
        this.tip10 = this.tip10.bind(this);
        this.tip15 = this.tip15.bind(this);
        this.tip20 = this.tip20.bind(this);
        this.tip0 = this.tip0.bind(this);
    }

    tip10() { this.setState({ total: this.props.subtotal*1.10 }); }
    tip15() { this.setState({ total: this.props.subtotal*1.15 }); }
    tip20() { this.setState({ total: this.props.subtotal*1.20 }); }
    tip0() { this.setState({ total: this.props.subtotal }); }

    paid() { window.location = "/"; }

    render() {
        let itemList = this.props.countedOrders.map((ord) => <div key={ord.name}><BillItem name={ord.name}/><BillCount count={ord.count}/></div>);
        return (
            <div className = "billRow2">
                {itemList}
                <div className="billColumn right">
                    <div className ="billRow2 sub1" >
                        <h1>${this.props.subtotal}</h1>    
                    </div>
                    <div className ="billRow2 sub2">
                        <button className="tip" onClick={this.tip10}>Tip 10%</button>
                        <button className="tip" onClick={this.tip15}>Tip 15%</button>
                        <button className="tip" onClick={this.tip20}>Tip 20%</button>
                        <button className="tip" onClick={this.tip0}>No Tip </button>
                        <h3 >Total: {moneyFormat(this.state.total)} </h3>
                    </div>
                    <div className ="billRow2 sub3">
                        <button className="cash" onClick={this.paid}>CASH</button>
                        <button className="card" onClick={this.paid}>CARD</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

BillRow2.propTypes = {
    subtotal: React.PropTypes.number,
    countedOrders: React.PropTypes.array
};

BillRow2.defaultProps = { subtotal: 0, countedOrders: []};