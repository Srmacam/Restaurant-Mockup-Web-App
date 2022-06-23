import React from 'react';

export class ChatContainerCustomer extends React.Component{
    render(){
        return(
            <div className="container customer">
                <p>{this.props.msg}</p>
            </div>  
        );
    }
}

ChatContainerCustomer.propTypes = {
    msg: React.PropTypes.string
};

ChatContainerCustomer.defaultProps = { msg: '' };