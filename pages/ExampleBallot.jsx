import React from 'react';
import {RootContainer, RootElement, TheFold} from 'react-server';

import {getBallot} from '../services/ballot'

import Ballot from '../components/Ballot.jsx';

export default class ExampleBallot {

  handleRoute(next) {
    const ballotId = this.getRequest().getRouteParams().ballotId
    const ballotPr = getBallot(ballotId)

    this.data = ballotPr.then(data => {
      return {ballot: data}
    })

    return next()
  }

  getElements() {
    return <RootContainer>
      <RootElement when={this.data}>
        <Ballot/>
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
