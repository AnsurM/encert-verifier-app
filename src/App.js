import React, { Component } from 'react';
import { Input } from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';


const axios = require('axios');
const Search = Input.Search;

class App extends Component {

  state = {
    certificates: null
  };

  onSearchCertificate = (value) => {
    console.log("Search input is: ", value);

    axios.get(`https://encert-server.herokuapp.com/issuer/certificate/${value}`)
    .then(function (response) {
      console.log(response);
      if(response.data.data.result)
      {
        let myCerts = response.data.data.result;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
