import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Paperbase from 'components/Paperbase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChangeCallapse = (collapsed) => {
    this.setState({collapsed});
  };

  render() {
    return <Paperbase />;
  }
}

export default withRouter(App);
