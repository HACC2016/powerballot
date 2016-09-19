import React, {PropTypes} from 'react'
import classnames from 'classnames'

import FindYourBallotContainer from './FindYourBallotContainer'
import Sidebar from './Sidebar'
import Instructions from './Instructions'
import OtherLinks from './OtherLinks'

import styles from './home.scss'

export default class Home extends React.Component {

  render () {
    const {} = this.props

    return (
      <div className={styles['container']}>
        <div className={classnames('row', styles['body'])}>
          <div className={styles['main-section']}>
            <FindYourBallotContainer />
            <Instructions />
          </div>
          <div className={styles['sidebar-container']}>
            <Sidebar />
          </div>
        </div>
        <div className={classnames('row', styles['other-links-container'])}>
          <h3 className='underline-header'>
            Other Links
          </h3>
          <div className={styles['other-links']}>
            <OtherLinks />
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
}
