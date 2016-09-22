import React, { PropTypes } from 'react'
import queryString from 'query-string'

import styles from './embedded-map.scss'

export default class EmbeddedMap extends React.Component {
  render () {
    const { latitude, longitude } = this.props

    const baseUrl = '//civic-celerator.maps.arcgis.com/apps/Embed/index.html'
    let params = {
      webmap: 'aff51516c0ed40048482165081d2b216',
      zoom: true,
      scale: true,
      search: true,
      disable_scroll: true,
      theme: 'light',
    }
    if (latitude && longitude) {
      params = {
        ...params,
        center: `${latitude},${longitude}`,
        level: 16,
      }
    }

    const url = `${baseUrl}?${queryString.stringify(params)}`

    return (
      <div className={styles['container']}>
        <iframe
          width="500"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="HACC Power Ballot" src={url} />
      </div>
    )
  }
}

EmbeddedMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}
