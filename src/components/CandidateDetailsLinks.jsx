import React, { PropTypes } from 'react'

import styles from './candidate-details-links.scss'
import { createLinkObject } from 'src/services/candidate_links_utils.js'

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
    const { candidate, link } = this.props
    const { metadata } = candidate
    const linkObject = createLinkObject(metadata, link)

    return (
        <div>
          { linkObject.href ?
            this._renderKnownLink(linkObject) :
            this._renderUnknownLink(linkObject) }
        </div>
    )
  }
}

CandidateDetailsLinks.propTypes = {
  candidate: PropTypes.object,
  link: PropTypes.string,
}
