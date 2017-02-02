import React from 'react'

class CoordinatesButton extends React.Component {
  constructor() {
    super()

    this.whenClicked = this.whenClicked.bind(this)
  }
  whenClicked(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
        <button onClick={this.whenClicked}></button>
    )
  }
}

module.exports = CoordinatesButton
