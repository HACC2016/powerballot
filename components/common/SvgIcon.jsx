import React, { PropTypes } from 'react'

import { canUseDOM } from '../../services/utils'

if (canUseDOM()) {
  var urls = {
    logo: require('../../assets/power_ballot-09.svgg'),
  }
}

export default class SvgIcon extends React.Component {
  render () {
    const { icon, ...otherProps } = this.props
    if (!canUseDOM()) return null

    return (
      <div>
        <svg {...otherProps}>
          <use xlinkHref={urls[icon]} />
        </svg>
      </div>
    )
  }
}

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}
