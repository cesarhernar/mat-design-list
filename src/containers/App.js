import React, { Component, PropTypes } from 'react';
import store from './../store.js'
import AdvocateContainer from './AdvocateContainer';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <AdvocateContainer />
        </Provider>
      </div>
    );
  }
}




App.propTypes = {

};

export default App;
