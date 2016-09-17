import React, { PropTypes } from 'react'

import { geocodeAddress, lookupPrecinct } from 'server/services/arc_gis'

import styles from './find-your-ballot.scss'

export default class FindYourBallot extends React.Component {
  state = {
    address: '1450 Ala Moana Blvd, Honolulu, HI 96814',
    addressLookupResult: {},
  }

  _updateAddress = (e) => {
    this.setState({address: e.target.value})
  }
  _submit = (e) => {
    if (e.key === 'Enter') {
      this._lookupAddress()
    }
  }

  _lookupAddress = () => {
    const { address } = this.state
    // Do query and then update state with output and display below
    geocodeAddress(address).then((result) => {
      // TODO: Ensure we have at least one candidate
      this.setState({addressLookupResult: result})
      this._lookupPrecinct()
    })
  }

  _lookupPrecinct = () => {
    const { addressLookupResult } = this.state
    const candidate = addressLookupResult.candidates[0]
    const spatialReference = addressLookupResult.spatialReference.wkid

    lookupPrecinct(candidate.location, spatialReference).then((result) => {
      const precinct = result[0].attributes.DP
      this.context.router.transitionTo(`/ballot/${precinct}`)
    })
  }

  render () {
    const { } = this.props
    const { address } = this.state

    return (
      <div className={styles['container']}>
        FindYourBallot
        <div className={styles['input-container']}>
          <input
            className={styles['input']}
            type='text'
            placeholder="Type your address here to get YOUR Power Ballot"
            onChange={this._updateAddress}
            onKeyPress={this._submit}
            value={address}
            onSubmit={this._submit}
          />
        <div className={styles['go-button']} onClick={this._lookupAddress}>
            GO
          </div>
        </div>
      </div>
    )
  }
}

FindYourBallot.propTypes = {
}
FindYourBallot.contextTypes = {
  router: PropTypes.object,
}
