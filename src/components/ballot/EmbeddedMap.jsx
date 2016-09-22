import React, { PropTypes } from 'react'

import styles from './embedded-map.scss'

export default class EmbeddedMap extends React.Component {
  render () {
    const { latitude, longitude } = this.props

    return (
      <div className={styles['container']}>
        <iframe
          width="500"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="HACC Power Ballot" src={`//civic-celerator.maps.arcgis.com/apps/Embed/index.html?webmap=aff51516c0ed40048482165081d2b216&amp;center=${latitude},${longitude},&amp;level=18&amp;zoom=true&amp;scale=true&amp;search=true&amp;disable_scroll=true&amp;theme=light`} />
      </div>
    )
  }
}

EmbeddedMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}
EmbeddedMap.defaultProps = {
  latitude: -127.864,
  longitude: 21.306,
}
