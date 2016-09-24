import React, { Component } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import { authenticated } from 'src/services/authentication_utils'

import Header from 'src/components/global/Header'
import Footer from 'src/components/global/Footer'
import BallotPage from 'src/components/BallotPage'
import Home from 'src/components/home/Home'
import StatewideBallotPage from 'src/components/StatewideBallotPage'
import AdminCandidatePage from 'src/components/AdminCandidatePage'

export default class App extends Component {
  state = {
    matchedAddress: '',
    matchedCoordinates: {},
  }

  _updateMatchedAddress = (matchedAddress) => this.setState({matchedAddress})
  _updateMatchedCoordinates = (matchedCoordinates) => this.setState({matchedCoordinates})

  _renderHomePage = () => {
    return (
      <Home
        updateMatchedAddress={this._updateMatchedAddress}
        updateMatchedCoordinates={this._updateMatchedCoordinates}
      />
    )
  }

  _renderBallotPage = (props) => {
    const { matchedAddress, matchedCoordinates } = this.state
    return <BallotPage {...props} matchedAddress={matchedAddress} matchedCoordinates={matchedCoordinates} />
  }

  render() {
    const adminNav = (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/statewide">View Statewide Ballot</Link></li>
        <li><Link to="/ballot/13-04">View Example Ballot</Link></li>
        <li><a href="/admin/candidate/USSe">Edit Example Candidate</a></li>
      </ul>
    )

    return (
      <BrowserRouter>
        <div>
          <Header />
          {authenticated() ? adminNav : null}
          <Match exactly pattern="/" render={this._renderHomePage} />
          <Match pattern="/statewide" component={StatewideBallotPage} />
          <Match pattern="/ballot/:precinct" render={this._renderBallotPage} />
          <Match pattern="/admin/candidate" component={AdminCandidatePage} />
          <Miss component={NoMatch} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const NoMatch = () => (
  <div className='row'>
    <h2>Whoops</h2>
    <p>Sorry but we weren't able to find the page you were looking for</p>
    <Link to="/">Start Over</Link>
    <br />
    <br />
    <br />
    <br />
  </div>
)
