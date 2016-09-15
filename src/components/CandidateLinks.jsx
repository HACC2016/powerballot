import React, { PropTypes } from 'react'

import parentStyles from './candidate-details.scss'
import styles from './candidate-links.scss'

export default class CandidateLinks extends React.Component {

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
    const { title, links } = this.props

    return (
      <div className={this.props.className}>
        <span className={parentStyles['section-title']}>{title}</span>
        {links.map((linkObject, i) => {
          return (
            <div key={i}>
              {linkObject.href ?
                this._renderKnownLink(linkObject) :
                this._renderUnknownLink(linkObject)}
            </div>
          )
        })}
      </div>
    )
  }
}

CandidateLinks.propTypes = {
  links: PropTypes.array,
}
