import React from 'react';

export class BillRow1 extends React.Component {

    render() {
        return (
            <div className = "billRow1">
                <div className="billColumn billLeft">
                    <h2>Menu Item</h2>
                </div>
                <div className ="billColumn middle">
                    <h2>Quantity</h2>
                </div>
                <div className="billColumn right">
                    <h2>Subtotal</h2>
                </div>
            </div>
            
        );
    }
}