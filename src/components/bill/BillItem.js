import React from 'react';

export class BillItem extends React.Component{
    render(){
        return (
            <div className="billColumn billLeft" >
                <div className="billRow2" >
                    <h3>{this.props.name}</h3>
                </div>                 
            </div>
        );
    }
}

BillItem.propTypes = {
    name: React.PropTypes.string
};

BillItem.defaultProps = { name: '' };