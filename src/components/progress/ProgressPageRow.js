import React from 'react';

export class ProgressPageRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = { deleted: false };
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.setState({ deleted: true });
    }

    render(){
        if (this.state.deleted) return(null);
        let order = this.props.item;
        let status;
        let statText;
        let statButton = "";
        switch (order.stat) {
            case 0:
                status = "prepping";
                statButton = <button id="testBegin" className="cancel" onClick={this.delete}> &times; </button>;
                statText = "Preparing your order ";
                break;
            case 1:
                status = "inProgress";
                statText = "Cooking your order";
                break;
            case 2:
                status = "done";
                statText = "Delivering your order";
                break;
            case 3:
                status = "delivered";
                statButton = <button id="testDone" className="pickup" onClick={this.delete}> &#10004; </button>;
                statText = "Delievered (Call for plate pickup?) ";
                break;
            default:
                alert("Error with status");
        }
        return (
            <div className= "progRow">
                <div>
                    <h2 id="nameID" className={status}>{order.name}</h2>
                </div>
                <div>
                    <h2 id="statusID" className={status}>{statText}{statButton}</h2>
                </div>
            </div> 
        );
    }
}

ProgressPageRow.propTypes = {
    item: React.PropTypes.object.isRequired
};
