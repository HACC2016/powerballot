import React from 'react'

import styles from './footer.scss'

export default class Footer extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['info-text']}>
          <img className={styles['civic-celerator-logo']} src="/assets/civic_celerator_logo.png" />
          <div>Did you find a mistake?</div>
          <div>Do you have a suggestion?</div>
          <div>Let us know.</div>

          <p><a href="mailto: hawaiipowerballot@gmail.com">Email Hawaii Power Ballot</a></p>
        </div>
        <div className={styles['about-text']}>
          <p>
            The Power Ballot is for informational purposes only and cannot be used to officially vote in the general election. No endorsement of any candidate or party is intended. Candidate information has been gathered from public websites and documents.
          </p>

          <p>
            Special thanks to Corie Tanida of Common Cause Hawaii who coordinated a great group of volunteers - Christine Trecker, Connie Clinton, Dustin Schoedel, Jeanne Ohta and Joe Heaukulani. They all spent many hours doing the candidate research that made the Power Ballot possible.
          </p>

          <p>
            The amazing web development skills of Jason Axelson were critical for pulling in candidate data from the REST service and smoothing the rough edges of my initial prototype.
          </p>

          Mahalo ka kou! - Da Map Guy (Royce Jones)
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
}
