import React, { Component } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import BallotPage from 'src/components/BallotPage'
import Home from 'src/components/home/Home'
import AdminCandidatePage from 'src/components/AdminCandidatePage'

export default class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <ul>
            {/* 3. Link to some paths with `Link` */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ballot/13-04">View Example Ballot</Link></li>
            <li><a href="/candidate/USSa">Edit Example Candidate</a></li>
          </ul>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/ballot/:precinct" component={BallotPage} />
          <Match pattern="/candidate" component={AdminCandidatePage} />
          <Miss component={NoMatch}/>
        </div>
      </BrowserRouter>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)