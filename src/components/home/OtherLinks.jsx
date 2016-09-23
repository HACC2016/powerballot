import React from 'react'

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
        to="/statewide"
      />
      <LinkWithIcon
        icon={ButtonVote}
        title='Register to Vote'
        description='Register to vote, update your voter file, and confirm registration'
        href="http://elections.hawaii.gov/"
      />
      <LinkWithIcon
        icon={ButtonMailIn}
        title='Vote by Mail'
        description='Request to vote by mail'
        href='https://olvr.hawaii.gov/'
      />
      <LinkWithIcon
        icon={ButtonVolunteer}
        title='Volunteer'
        description='Sign up to be an Election Day Official'
        href='https://go.elections.hawaii.gov/signup/'
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
        href='http://civic-celerator.maps.arcgis.com/apps/webappviewer/index.html?id=5fba18ab076145109c62c3f2ab3b6e4f'
      />
    </div>
  )
}

OtherLinks.propTypes = {
}
