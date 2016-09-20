import React from 'react'

import SvgIcon from 'src/components/common/SvgIcon.jsx'

import StripedFlag from 'src/assets/striped_flag_r0-01.svg'

import styles from './vote-flag.scss'

export default function VoteFlag (props) {
  const { } = props

  return (
    <div className={styles['flag-container']}>
      <div className={styles['stars']}>★★★</div>
      <div className={styles['flag-title']}>2016 General Election</div>
      <div className={styles['flag-date']}>November 8, 2016</div>
      <div>
        <a className={styles['flag-link']} href='http://elections.hawaii.gov/' target='_blank'>Register to Vote!</a>
      </div>
      <SvgIcon
        containerClassName={styles['striped-flag']}
        width='152'
        height='66'
        icon={StripedFlag}
        />
    </div>
  )
}

VoteFlag.propTypes = {
}
