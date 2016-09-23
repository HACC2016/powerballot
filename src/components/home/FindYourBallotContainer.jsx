/* global ga:false */
import React, { PropTypes } from 'react'

// eslint-disable-next-line import/named
import { geocodeAddress, lookupPrecinct } from 'server/services/arc_gis'

import FindYourBallot from './FindYourBallot'

export default class FindYourBallotContainer extends React.Component {
  state = {
    address: '',
    addressLookupResult: {},
    fetching: false,
  }

  _updateAddress = (e) => {
    this.setState({address: e.target.value})
  }
  _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._lookupAddress()
    }
  }

  _lookupAddress = () => {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'button', 'navigation', 'find_your_power_ballot', 1)
    }

    const { address } = this.state
    // Do query and then update state with output and display below
    geocodeAddress(address).then((result) => {
      // TODO: Ensure we have at least one candidate
      this.setState({addressLookupResult: result})
      this._lookupPrecinct()
    })
    this.setState({fetching: true})
  }

  _lookupPrecinct = () => {
    const { updateMatchedAddress, updateMatchedCoordinates } = this.props
    const { addressLookupResult } = this.state
    const candidate = addressLookupResult.candidates[0]
    const spatialReference = addressLookupResult.spatialReference.wkid

    if (candidate) {
      lookupPrecinct(candidate.location, spatialReference).then((result) => {
        if (result[0]) {
          const precinct = result[0].attributes.DP
          this.setState({fetching: false})
          updateMatchedAddress(candidate.address)
          updateMatchedCoordinates({latitude: candidate.location.x, longitude: candidate.location.y})
          this.context.router.transitionTo(`/ballot/${precinct}`)
        } else {
          this._unableToFindPrecinct()
        }
      })
    } else {
      this._unableToFindPrecinct()
    }
  }

  _unableToFindPrecinct () {
    alert('The address as you entered it cannot be found. Please double-check and try again.')
    this.setState({fetching: false})
  }

  render () {
    const { } = this.props
    const { address, fetching } = this.state

    return (
      <FindYourBallot
        fetching={fetching}
        onChange={this._updateAddress}
        onKeyPress={this._onKeyPress}
        value={address}
        onSubmitHandler={this._lookupAddress}
      />
    )
  }
}

FindYourBallotContainer.propTypes = {
  updateMatchedAddress: PropTypes.func,
  updateMatchedCoordinates: PropTypes.func,
}
FindYourBallotContainer.contextTypes = {
  router: PropTypes.object,
}
