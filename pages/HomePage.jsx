import React from 'react';
import Home from '../components/Home.jsx';

export default class SimplePage {
  getElements() {
    return <Home/>
  }

  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ];
  }
}
