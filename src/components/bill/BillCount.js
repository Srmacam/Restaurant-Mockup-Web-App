import React from 'react';

export class BillCount extends React.Component{
    render(){
        return (
            <div className="billColumn middle" >
                <div className="billRow2">
                    <h3>x{this.props.count}</h3>
                </div>                 
            </div>
        );
    }
}

BillCount.propTypes = {
    count: React.PropTypes.number
};

BillCount.defaultProps = { count: 0 };