import React from 'react';
import {RootContainer, RootElement, TheFold} from 'react-server';

import {getCandidates, getPrecincts} from '../services/arc_gis'

import Home from '../components/Home.jsx';

export default class HomePage {
  handleRoute(next) {
    const candidatesPr = getCandidates()
    const precinctsPr = getPrecincts()

    this.data = Promise.all([candidatesPr, precinctsPr])
    .then(data => {
      return {candidates: data[0], precincts: data[1]}
    })

    return next()
  }

  getElements() {
    return <RootContainer>
      <RootElement when={this.data}>
        <Home/>
      </RootElement>
      <TheFold />
    </RootContainer>
  }



  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ];
  }
}
