import React, { PropTypes } from 'react'

import styles from './candidate-details-links.scss'
import { metadataFieldNameToTitle } from 'src/services/candidate_utils.js'

export default class CandidateDetailsLink extends React.Component {

  _fieldToHref(metadata, field) {
    if (field === 'cand_email' && metadata[field]) {
      return 'mailto: ' + metadata[field]
    }
    else {
      return metadata[field]
    }
  }

  _createLinkObject(metadata, fieldName) {
    return {
      title: metadataFieldNameToTitle(fieldName),
      href: this._fieldToHref(metadata, fieldName),
    }
  }

  _renderKnownLink(link) {
    return (
      <span><a className={styles['known-link']} href={link.href}>{link.title}</a></span>
    )
  }

  _renderUnknownLink(link) {
    const { alwaysShow } = this.props
    if (!alwaysShow) return null

    return (
      <span className={styles['unknown-link']}>{link.title}<span className={styles['unknown-link-href']}> Unknown</span></span>
    )
  }

  render () {
    const { candidate, fieldName } = this.props
    const { metadata } = candidate
    const linkObject = this._createLinkObject(metadata, fieldName)

    return (
      <div>
        { linkObject.href
        ? this._renderKnownLink(linkObject)
        : this._renderUnknownLink(linkObject) }
      </div>
    )
  }
}

CandidateDetailsLink.propTypes = {
  alwaysShow: PropTypes.bool,
  candidate: PropTypes.object,
  fieldName: PropTypes.string,
}
CandidateDetailsLink.defaultProps = {
  alwaysShow: true,
}
