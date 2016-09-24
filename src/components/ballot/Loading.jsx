import React from 'react'

import styles from './loading.scss'

export default class Loading extends React.Component {

  state = {
    count: 0,
  }

  componentWillMount () {
    this.intervalControl = setInterval(() => {
      this.setState({
        count: ((this.state.count+1) % 6),
      })
    }, 200)
  }

  componentWillUnmount () {
    if (this.intervalControl) {
      clearInterval(this.intervalControl)
      this.intervalControl = undefined
    }
  }

  render () {
    return (
      <div className={styles['loading-container']}>
        {"★".repeat(this.state.count)}
      </div>
    )
  }
}
