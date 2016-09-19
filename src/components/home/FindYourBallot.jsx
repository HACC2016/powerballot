import React, { PropTypes } from 'react'

import styles from './find-your-ballot.scss'

export default class FindYourBallot extends React.Component {
  render () {
    const { fetching, onChange, onKeyPress, value } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['feature']}>
          Find <i>Your</i>&nbsp; “Power Ballot”
        </div>
        <div className={styles['input-container']}>
          <input
            className={styles['input']}
            type='text'
            placeholder="Type your address here to get YOUR Power Ballot"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
          z/>
          <div className={styles['go-button']} onClick={this._lookupAddress}>
            GO
          </div>
        </div>
        {fetching ? 'loading...': null}
      </div>
    )
  }
}

FindYourBallot.propTypes = {
  fetching: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}
