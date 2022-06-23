import React from 'react';

export class ChatContainer extends React.Component{
    render(){
        return(
            <div className="container">
                <p>{this.props.msg}</p>
            </div>  
        );
    }
}

ChatContainer.propTypes = {
    msg: React.PropTypes.string
};

ChatContainer.defaultProps = { msg: '' };