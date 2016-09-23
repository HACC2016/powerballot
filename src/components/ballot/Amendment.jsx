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
    const nameWithoutPrefix = contestName.substring(n !== -1 ? n+1 : 0)
    return nameWithoutPrefix.replace(/^Relating to/,'')
  }

  render () {
    const { amendmentGroup } = this.props
    const { contests } = amendmentGroup

    return (
      <div>
        <div className={styles['header']}>
          <div className={styles['proposed-text']}>Proposed Amendments to the</div>
          <div>{this._renderAmendmentGroupName()}</div>
        </div>
        <div className={styles['amendment-group-description']}>
          The following lists the related topics for the proposed {this._renderAmendmentGroupName()} amendments. You can vote YES or NO on each proposed amendment.
        </div>
        <div className={styles['amendment-list']}>
          {contests.map((contest, i) => {
            return (
              <div key={i} className={styles['amendment-name']}>
                <a href="http://elections.hawaii.gov/voters/constitutional-and-charter-amendment-questions/"
                  className={styles['amendment-link']}>
                  <div className={styles['relating-to']}>Relating to</div>
                  {this._renderSingleAmendmentName(contest.Contest_Name)}
                </a>
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
