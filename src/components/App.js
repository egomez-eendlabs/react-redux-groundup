//This component handles the App tempalte used on every page.
import React, {PropTypes} from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Navigation goes here</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
