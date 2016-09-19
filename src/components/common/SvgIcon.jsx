import React, { PropTypes } from 'react'

export default class SvgIcon extends React.Component {
  render () {
    const { icon, ...otherProps } = this.props

    return (
      <div>
        <svg {...otherProps}>
          <use xlinkHref={icon} />
        </svg>
      </div>
    )
  }
}

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}
