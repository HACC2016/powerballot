import React from 'react'
import classnames from 'classnames'

import styles from './footer.scss'

export default class Footer extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['container']}>
        <div className={classnames('row', styles['inner-container'])}>
          <div className={styles['info-text']}>
            <img className={styles['civic-celerator-logo']} src="/assets/civic_celerator_logo.png" />
            <div>Did you find a mistake?</div>
            <div>Do you have a suggestion?</div>
            <div>Let us know.</div>

            <p><a className={styles['email-link']} href="mailto: hawaiipowerballot@gmail.com">Email Hawaii Power Ballot</a></p>
          </div>
          <div className={styles['about-text']}>
            <p>
              The Power Ballot is for informational purposes only and cannot be used to officially vote in the general election. No endorsement of any candidate or party is intended. Candidate information has been gathered from public websites and documents.
            </p>

            <p>
              Special thanks to Corie Tanida of Common Cause Hawaii who coordinated a great group of volunteers - Christine Trecker, Connie Clinton, Dustin Schoedel, Jeanne Ohta and Joe Heaukulani.
            </p>

            <p>
              Many thanks to Royce Jones (Da Map Guy) who manually input the Office of Elections PDF's into a REST service (as well as developing the initial 2014 power ballot) and made our lives much easier. Jill Misawa developed the design for the site and Aaron Fujimoto and Jason Axelson did the development as part of the first Hawaii Annual Code Challenge 2016.
            </p>

          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
}
