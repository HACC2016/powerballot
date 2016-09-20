import React from 'react'
import classnames from 'classnames'

import SvgIcon from 'src/components/common/SvgIcon.jsx'

import VoteFlag from './VoteFlag'

import 'normalize.css'
import Logo from 'src/assets/power_ballot-09.svg'
import styles from './header.scss'
import '../../styles/styles.scss'

export default class Header extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['container']}>
        <div className={classnames('row', styles['row'])}>
          <div>STATE OF HAWAII</div>
          <SvgIcon icon={Logo} className={styles['logo']} />
          <div className={styles['subtext']}>
            A robust guide to <u>who</u> and <u>what</u> we will be voting for in the 2016 General Election.
          </div>
          <div className={styles['vote-flag-container']}>
            <VoteFlag />
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
}
