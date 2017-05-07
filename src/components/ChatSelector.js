import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
class ChatSelector extends React.Component{
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  goToChatroom(e){
    e.preventDefault(); // stop form from refreshing route
    const roomId = this.roomInput.value;
    this.props.history.push(`/room/${roomId}/`);
  }
  render(){
    return(
      <div>
        <h1>Select a chatroom</h1>
        <form onSubmit={this.goToChatroom.bind(this)}>
          <input defaultValue="test" ref={(el)=>this.roomInput=el}/>
        </form>
      </div>
    );
  }
}


const RoutingChatSelector = withRouter(ChatSelector);

export default RoutingChatSelector;