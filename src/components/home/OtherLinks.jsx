import React, { PropTypes } from 'react'

import LinkWithIcon from './LinkWithIcon'

import ButtonMailIn from 'src/assets/button_mail_in.svg'
import ButtonPollOfficial from 'src/assets/button_poll_official.svg'
import ButtonPollUnofficial from 'src/assets/button_poll_unofficial.svg'
import ButtonStatewide from 'src/assets/button_statewide.svg'
import ButtonVolunteer from 'src/assets/button_volunteer.svg'
import ButtonVote from 'src/assets/button_vote.svg'

import styles from './other-links.scss'

export default function OtherLinks (props) {
  const { } = props

  return (
    <div className={styles['container']}>
      <LinkWithIcon
        icon={ButtonStatewide}
        title='Statewide Power Ballot'
        description='All candidates and issues statewide'
      />
      <LinkWithIcon
        icon={ButtonVote}
        title='Register to Vote'
        description='Register to vote, update your voter file, and confirm registration'
      />
      <LinkWithIcon
        icon={ButtonMailIn}
        title='Vote by Mail'
        description='Request to vote by mail'
      />
      <LinkWithIcon
        icon={ButtonVolunteer}
        title='Volunteer'
        description='Sign up to be an Election Day Official'
      />
      <LinkWithIcon
        icon={ButtonPollOfficial}
        title='Find your polling place, Official'
        description='Using your name and birth date'
      />
      <LinkWithIcon
        icon={ButtonPollUnofficial}
        title='Find your polling place, Unofficial'
        description='Using your address'
      />
    </div>
  )
}

OtherLinks.propTypes = {
}
