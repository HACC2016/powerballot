import React, {PropTypes} from 'react'
import classnames from 'classnames'

import FindYourBallotContainer from './FindYourBallotContainer'
import Sidebar from './Sidebar'
import Instructions from './Instructions'
import OtherLinks from './OtherLinks'

import styles from './home.scss'

export default class Home extends React.Component {

  render () {
    const {updateMatchedAddress, updateMatchedCoordinates} = this.props

    return (
      <div className={styles['container']}>
        <FindYourBallotContainer
          updateMatchedAddress={updateMatchedAddress}
          updateMatchedCoordinates={updateMatchedCoordinates}
        />
        <div className={classnames('row', styles['body'])}>
          <div className={styles['sidebar-container']}>
            <Sidebar />
          </div>
          <div className={styles['main-section']}>
            <h3 className='underline-header'>
              Other Links
            </h3>
            <div className={styles['other-links']}>
              <OtherLinks />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  updateMatchedAddress: PropTypes.func,
  updateMatchedCoordinates: PropTypes.func,
}
