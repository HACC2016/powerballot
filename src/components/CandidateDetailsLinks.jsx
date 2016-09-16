import React, { PropTypes } from 'react'

import styles from './candidate-details-links.scss'

export default class CandidateDetailsLinks extends React.Component {

  _renderKnownLink(link) {
    return (
      <span><a className={styles['known-link']} href={link.href}>{link.title}</a></span>
    )
  }

  _renderUnknownLink(link) {
    return (
      <span className={styles['unknown-link']}>{link.title}<span className={styles['unknown-link-href']}> Unknown</span></span>
    )
  }

  render () {
    const { link } = this.props

    return (
        <div>
          { link.href ?
            this._renderKnownLink(link) :
            this._renderUnknownLink(link) }
        </div>
    )
  }
}

CandidateDetailsLinks.propTypes = {
  link: PropTypes.object,
}
