import React, { Component } from 'react';
import '../App.css';
import Rebase from '../base';
class App extends Component {
  constructor(params){
    super(...arguments);
    this.roomId = params.match.params.room_id;
    this.state = {
      chat: []
    }
  }
  componentWillMount() {
    this.rel = Rebase.syncState(`${this.roomId}/chat`,
    {
      context: this,
      state: 'chat',
      asArray: true
    });
  }
  componentWillUnmount() {
    Rebase.removeBinding(this.rel);
  }
  chat(e){
    e.preventDefault();
    let chat = [...this.state.chat];
    let text = this.chatInput.value;
    if(chat.length>10){
      chat.shift();
    }
    if(text.length>250){
      text = text.slice(0,250);
    }
    chat.push({text, time: Date.now()});
    this.chatInput.value = '';
    this.setState({chat});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to {this.roomId}</h2>
        </div>
        {
          this.state.chat.map(messageObj => <p key={messageObj.time}>{messageObj.text}</p>)
        }
        <form onSubmit={this.chat.bind(this)}>
        <input placeholder="chat here" ref={el => this.chatInput = el} />
        </form>
      </div>
    );
  }
}

export default App;
