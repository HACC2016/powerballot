import React, { PropTypes } from 'react'
import { getAmendmentGroupTitle } from 'src/services/amendment_utils.js'

import styles from './amendment.scss'

export default class Amendment extends React.Component {
  _renderAmendmentGroupName () {
    const { amendmentGroup } = this.props
    return getAmendmentGroupTitle(amendmentGroup.name)
  }

  _renderSingleAmendmentName (contestName) {
    const n = contestName.indexOf(':')
    return contestName.substring(n !== -1 ? n+1 : 0)
  }

  render () {
    const { amendmentGroup } = this.props
    const { contests } = amendmentGroup

    return (
      <div>
        <div className={styles['header']}>
          Proposed Amendments to the {this._renderAmendmentGroupName()}
        </div>
        <div className={styles['amendment-group-description']}>
          The following lists the related topics for the proposed {this._renderAmendmentGroupName()} amendments. You can vote YES or NO on each proposed amendment.
        </div>
        <div className={styles['amendment-list']}>
          {contests.map((contest, i) => {
            return (
              <div key={i} className={styles['amendment-name']}>
                #{i+1}: {this._renderSingleAmendmentName(contest.Contest_Name)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Amendment.propTypes = {
  amendmentGroup: PropTypes.object,
}
