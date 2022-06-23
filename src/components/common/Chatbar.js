import React from 'react';
import {Link} from 'react-router';

export class Chatbar extends React.Component {

    render() {
        return (
            <div className="chatbar">
                <Link to="chat">Chat</Link>
            </div>
        );
    }
}

/*
<div className="chatbar">
    <a href="chatmockup.html">Chat</a>
</div>
*/