import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './counter';
import reducer from './reducer';



function App() {

  const store = createStore(reducer);

  return (
    <div className="jumbotron">
      <Provider store={store}>
        <Counter/>
      </Provider>      
    </div>
  );
}

export default App;
