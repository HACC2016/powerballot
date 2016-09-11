import React from 'react'
import {RootContainer, RootElement, TheFold} from 'react-server'

import {getBallot} from '../services/ballot'
import Header from '../components/global/Header.jsx'

import Ballot from '../components/Ballot.jsx'

export default class ExampleBallot {

  handleRoute(next) {
    const ballotId = this.getRequest().getRouteParams().ballotId
    const ballotPr = getBallot(ballotId)

    this.data = ballotPr.then(data => {
      console.log('server ballot data', JSON.stringify(data, null, 2))

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

  getLinkTags() {
    return [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro" },
    ]
  }

  getElements() {
    const ballot = {
      contests: [
        {
          Contest_ID: "USS",
          candidates: [
            { id: 161,
              Candidate_ID: 'USSa',
              Contest_ID: 'USS',
              Candidate_Name: 'Allison, Joy J.',
              Candidate_Party: 'C',
              Candidate_FEC: 'S4HI00151',
              Candidate_CSC: 'see FEC',
              created_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)',
              updated_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)',
            },
          ],
        },
      ],
      amendments: [
        {
        },
      ],
    }
      // <RootElement when={this.data}>
    return <RootContainer>
      <RootElement>
        <Header />
      </RootElement>
      <RootElement>
        <Ballot ballot={ballot} />
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
