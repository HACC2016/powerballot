import React, { PropTypes } from 'react'

import { getBallot } from 'src/services/api'

import Ballot from 'src/components/ballot/Ballot'
import Loading from 'src/components/ballot/Loading'

import styles from './ballot-page.scss'

export default class BallotPage extends React.Component {
  state = {
    ballot: {},
    // Warning: this class has a precinct and a prop called precinct
    // This state is needed so that we know if we need to fetch new data
    precinct: '',
  }
  fetching = false

  // We need to check if we have the data. If we don't then fetch it
  componentWillMount () {
    const { precinct } = this.props.params
    if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.precinct === precinct) {
      this.setState({
        ballot: window.__INITIAL_STATE__.ballot,
        precinct: window.__INITIAL_STATE__.precinct,
      })
    } else {
      this._fetchData()
    }
  }

  componentWillUpdate () {
    if (!this._hasData()) {
      this._fetchData()
    }
  }

  _hasData () {
    const { precinct } = this.props.params

    return this.state.precinct === precinct
  }

  _fetchData() {
    const { precinct } = this.props.params

    if (!this._hasData() && !this.fetching) {
      this.fetching = true
      getBallot(precinct).then((data) => {
        this.setState({
          ballot: data.ballot,
          precinct,
        })
        this.fetching = false
      })
    }
  }

  _getBallot () {
    const { precinct } = this.props.params
    if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.precinct === precinct) {
      return window.__INITIAL_STATE__.ballot
    } else {
      return null
    }
  }

  _renderLoading () {
    return <div className={styles['loading-container']}>
      <Loading />
    </div>
  }

  render () {
    const { matchedAddress, matchedCoordinates } = this.props
    const { precinct } = this.props.params
    const { ballot } = this.state
    if (!this._hasData()) return this._renderLoading()

    return (
      <Ballot
        address={matchedAddress}
        ballot={ballot}
        coordinates={matchedCoordinates}
        precinct={precinct}
      />
    )
  }
}

BallotPage.propTypes = {
  matchedAddress: PropTypes.string,
  matchedCoordinates: PropTypes.object,
  params: PropTypes.object,
  precinct: PropTypes.string,
}
