import React, { PropTypes } from 'react'

export default class PrecinctList extends React.Component {
  render () {
    const { precincts } = this.props
    if (!precincts) return null

    return (
      <div>
        <h2>Precincts</h2>
        {precincts.map((p, i) => {
          return <div key={i}>
            {JSON.stringify(p.attributes)}
          </div>
        })}
      </div>
    )
  }
}

PrecinctList.propTypes = {
  precints: PropTypes.array,
}
