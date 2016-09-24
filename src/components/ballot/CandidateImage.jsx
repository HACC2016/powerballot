import React, { PropTypes } from 'react'
import SvgIcon from 'src/components/common/SvgIcon'
import NoPhoto from 'src/assets/no_photo-14.svg'

export default class CandidateImage extends React.Component {

  state = {
    isValid: true,
  }

  componentDidMount() {
    this.imgRef.onerror = () => {
      this.setState({isValid: false})
    }
  }

  _saveRef = (ref) => this.imgRef = ref

  render () {
    const { candidate } = this.props

    if (this.state.isValid) {
      return (
        <img ref={this._saveRef} src={candidate.metadata.photo_url} />
      )
    }
    else {
      return (
        <SvgIcon icon={NoPhoto} width={64} height={75} />
      )
    }
  }
}

CandidateImage.propTypes = {
  candidate: PropTypes.object,
}
