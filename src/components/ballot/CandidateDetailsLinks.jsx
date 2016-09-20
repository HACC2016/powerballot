import React, { PropTypes } from 'react'

import CandidateDetailsLink from './CandidateDetailsLink.jsx'

import parentStyles from './candidate-details.scss'

export default class CandidateDetailsLinks extends React.Component {

  render () {
    const { title, candidate, links } = this.props

    return (
      <div className={this.props.className}>
        <span className={parentStyles['section-title']}>{title}</span>
        {links.map((linkFieldName, i) => {
          return (
            <CandidateDetailsLink key={i} candidate={candidate} fieldName={linkFieldName} />
          )
        })}
      </div>
    )
  }
}

CandidateDetailsLinks.propTypes = {
  candidate: PropTypes.object,
  links: PropTypes.array,
}
