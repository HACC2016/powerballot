import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import SvgIcon from 'src/components/common/SvgIcon'

import styles from './link-with-icon.scss'

function wrapperEl (props) {
  if (props.to) {
    return Link
  } else if (props.href) {
    return 'a'
  } else {
    return 'div'
  }
}

export default function LinkWithIcon (props) {
  const { description, href, icon, title, to } = props
  let target = href ? '_blank' : null

  return React.createElement(wrapperEl(props),
    {
      className: styles['container'],
      href,
      target,
      to,
    },
    <SvgIcon icon={icon} width={60} height={60} className={styles['icon']} />,
    <div className='bold'>{title}</div>,
    <div>{description}</div>,
  )
}

LinkWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}
