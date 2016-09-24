import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'

import SvgIcon from 'src/components/common/SvgIcon.jsx'

import Logo from 'src/assets/power_ballot_admin-16.svg'
import styles from './admin-header.scss'

export default class AdminHeader extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['container']}>
        <div className={classnames('row', styles['row'])}>
          <div className={styles['hawaii-text']}>STATE OF HAWAII</div>
          <Link to="/">
            <SvgIcon icon={Logo} className={styles['logo']} width={300} height={46} />
          </Link>
        </div>
      </div>
    )
  }
}

AdminHeader.propTypes = {
}
