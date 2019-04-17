import React, { Component } from 'react';
import { Input } from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';


const axios = require('axios');
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <br /><br />
            <Search
              placeholder="input search text"
              size="large"
              onSearch={value => this.onSearchCertificate(value)}
              enterButton
            />
          </div>,
        </div>
    );
  }
}

export default App;
