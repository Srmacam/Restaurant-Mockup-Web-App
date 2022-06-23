import React from 'react';
import {Link} from 'react-router';
import {ChatContainer} from './ChatContainer';
import {ChatContainerCustomer} from './ChatContainerCustomer';
import {Chat} from './Chat';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chat: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(msg) {
        let newChat = this.state.chat;
        newChat.push(msg);
        this.setState({ chat: newChat });
    }

    render() {
        let currChat = this.state.chat;
        let chatList = currChat.map((msg, i) =>
            (i%2 === 0) ? <ChatContainerCustomer msg={msg}/> : <ChatContainer msg={msg}/>
        );

        return (
            <div id="chatContainer">
                {chatList}
                <Chat onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

ChatPage.propTypes = {
    chat: React.PropTypes.array.isRequired
};

export default ChatPage;