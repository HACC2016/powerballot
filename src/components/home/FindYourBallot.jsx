import React, { PropTypes } from 'react'

import styles from './find-your-ballot.scss'

export default class FindYourBallot extends React.Component {
  render () {
    const { fetching, onChange, onKeyPress, value, onSubmitHandler } = this.props

    return (
      <div className={styles['container']}>
        <div className='row'>
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
            />
            <div className={styles['go-button']} onClick={onSubmitHandler}>
              GO
            </div>
          </div>
          {fetching ? 'searching...': null}
          <div className={styles['instructions']}>
            * AAAAAAAAAAAAAAAA vote, most likely your home address. If you're unsure of which address is associated with your voter registration and want to check your voter file OR you still need to register to vote visit <a href="https://olvr.hawaii.gov/">https://olvr.hawaii.gov/</a>
          </div>
        </div>
      </div>
    )
  }
}

FindYourBallot.propTypes = {
  fetching: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
  onSubmitHandler: PropTypes.func,
}
