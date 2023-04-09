import React from "react";
import "../../style.scss";
import './app.scss'
import { Provider } from "react-redux";
import store from '../../store'
import Request from '../request'

const App = () => {
  return (
    <div className='app-container'>
      <Provider store={store}>
        <Request
          url={"https://jsonplaceholder.typicode.com/todos/1"}
          text={"Successfully"}
        />
        <Request
          url={"https://jsonplaceholder.typicode.com/tods/1"}
          text={"Unsuccessfully"}
        />
      </Provider>
    </div>
  );
  
  
  
};

export default App;
