import React from 'react'
import {RootContainer, RootElement, TheFold} from 'react-server'

import {getBallot, getCandidatesPromise} from '../services/ballot'

import Ballot from '../components/Ballot.jsx'

export default class ExampleBallot {

  handleRoute(next) {
    const ballotId = this.getRequest().getRouteParams().ballotId
    const ballotPr = getBallot(ballotId)

    const candidatesForBallot = getCandidatesPromise(['USS', 'USH1'])

    this.data = Promise.all([ballotPr, candidatesForBallot]).then(data => {
      return {
        ballot: data[0],
        candidates: data[1],
      }
    },
    failure => {
      console.error('Unable to get candidates data')
      console.error(failure)
      return { ballot: {}, candidates: []}
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
    ]
  }
}
