import React from 'react';

export class Chat extends React.Component{

    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submit() {
        if (/\S/.test(this.state.inputValue)) {
            this.props.onSubmit(this.state.inputValue);
            this.setState({inputValue: ''});
        }
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.submit();
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render(){
        return(
            <div className = "chat">
                <form>
                    <input className="text" type="text" placeholder="Type your message here"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}/>
                    <a className="reset" href="javascript:void(0)" onClick={this.submit}> &#8594; </a>
                </form>
            </div>
        );
    }
}

Chat.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};