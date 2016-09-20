import React, { PropTypes } from 'react'

export default class SvgIcon extends React.Component {
  render () {
    const { containerClassName, icon, ...otherProps } = this.props

    return (
      <div className={containerClassName}>
        <svg {...otherProps}>
          <use xlinkHref={icon} />
        </svg>
      </div>
    )
  }
}

SvgIcon.propTypes = {
  containerClassName: PropTypes.string,
  icon: PropTypes.string.isRequired,
}
