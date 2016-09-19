import React, { PropTypes } from 'react'

import SvgIcon from 'src/components/common/SvgIcon'

import styles from './link-with-icon.scss'

export default function LinkWithIcon (props) {
  const { description, icon, title } = props

  return (
    <div className={styles['container']}>
      <SvgIcon icon={icon} width={60} height={60} className={styles['icon']} />
      <div className='bold'>{title}</div>
      <div>{description}</div>
    </div>
  )
}

LinkWithIcon.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}
