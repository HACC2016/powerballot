import React from 'react'
import {RootContainer, RootElement, TheFold} from 'react-server'

import {getHardcodedBallot} from '../services/ballot'

import Ballot from '../components/Ballot.jsx'

export default class ExampleBallot {

  handleRoute(next) {
    //const ballotId = this.getRequest().getRouteParams().ballotId
    const ballotPr = getHardcodedBallot()

    this.data = ballotPr.then(data => {
      console.log(data)

      return {
        ballot: data,
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
