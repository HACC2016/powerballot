import React from 'react'
import {RootContainer, RootElement, TheFold} from 'react-server'

import {getCandidates, getPrecincts} from '../services/arc_gis'

import Header from '../components/global/Header.jsx'
import Home from '../components/Home.jsx'

export default class HomePage {
  handleRoute(next) {
    const candidatesPr = getCandidates()
    const precinctsPr = getPrecincts()

    this.data = Promise.all([candidatesPr, precinctsPr])
    .then(data => {
      console.log(data[0])
      console.log(data[1])
      return {candidates: data[0], precincts: data[1]}
    })

    return next()
  }

  getLinkTags() {
    return [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro" },
    ]
  }

  getElements() {
    console.log('HomePage!')

    return <RootContainer>
      <RootElement>
        <Header />
      </RootElement>
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
    ]
  }
}
