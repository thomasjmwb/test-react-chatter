import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ChatSelector from './components/ChatSelector';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ChatSelector} />
        <Route exact path="/room/:room_id" component={App} />
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
export default Root;