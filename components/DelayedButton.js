import React from 'react'

class DelayedButton extends React.Component {
  constructor() {
    super()

    this.whenClicked = this.whenClicked.bind(this)
  }

  whenClicked(event) {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render () {
    return (
      <button onClick={this.whenClicked}></button>
    )
  }
}

module.exports = DelayedButton


// DELAYEDBUTTON
// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number).
// (These props are only passed in the test suite, you will have errors in the browser)
// When the button is clicked, we want to persist the event so we can pass it to the
 // this.props.onDelayedClick() in a setTimeout() block.
// The setTimeout() will be set to this.props.delay.
