import React from 'react'

import SvgIcon from '../common/SvgIcon.jsx'

import 'normalize.css'
import Logo from 'src/assets/power_ballot-09.svg'
import styles from './header.scss'
import '../../styles/styles.scss'

export default class Header extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['header-container']}>
        <div className='row'>
          <div>STATE OF HAWAII</div>
          <SvgIcon icon={Logo} className={styles['logo']} />
          <div className={styles['subtext']}>
            A robust guide to <u>who</u> and <u>what</u> we will be voting for in the 2016 General Election.
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
}
