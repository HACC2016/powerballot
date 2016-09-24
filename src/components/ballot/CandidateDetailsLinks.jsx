import React, { PropTypes } from 'react'

import CandidateDetailsLink from './CandidateDetailsLink.jsx'

import parentStyles from './candidate-details.scss'

export default class CandidateDetailsLinks extends React.Component {

  render () {
    const { title, candidate, links } = this.props

    return (
      <div className={this.props.className}>
        <span className={parentStyles['section-title']}>{title}</span>
        {links.map((link, i) => {
          if (typeof link === 'string') {
            return (
              <CandidateDetailsLink key={i} candidate={candidate} fieldName={link} />
            )
          } else {
            console.log('on', link)
            return (
              <CandidateDetailsLink key={i} candidate={candidate} fieldName={link.field} alwaysShow={link.alwaysShow} />
            )
          }
        })}
      </div>
    )
  }
}

CandidateDetailsLinks.propTypes = {
  candidate: PropTypes.object,
  className: PropTypes.string,
  links: PropTypes.array,
  title: PropTypes.string,
}
