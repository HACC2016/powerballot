import React from 'react'

import { getStatewideBallot } from 'src/services/api'

import StatewideBallot from 'src/components/StatewideBallot'

export default class StatewideBallotPage extends React.Component {
  state = {
    ballot: {},
    // Warning: this class has a precinct and a prop called precinct
    // This state is needed so that we know if we need to fetch new data
    precinct: '',
    hasData: false,
  }
  fetching = false

  // We need to check if we have the data. If we don't then fetch it
  componentWillMount () {
    this._fetchData()
  }

  componentWillUpdate () {
    if (!this._hasData()) {
      this._fetchData()
    }
  }

  _hasData () {
    return this.state.hasData
  }

  _fetchData() {
    console.log('Fetch data called')
    if (!this._hasData() && !this.fetching) {
      this.fetching = true
      let precinctId = '22-04'
      getStatewideBallot().then((data) => {
        this.setState({
          ballot: data.ballot,
          precinct: precinctId,
          hasData: true,
        })
        this.fetching = false

        console.log('Done fetching data')
      })
    }
  }

  render () {
    const { ballot } = this.state

    if (!this._hasData()) return <div>Loading...</div>

    return (
      <StatewideBallot
        ballot={ballot}
      />
    )
  }
}

StatewideBallotPage.propTypes = {
}
