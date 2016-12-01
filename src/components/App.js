//This component handles the App tempalte used on every page.
import React, {PropTypes} from 'react'

class App extends React.Component {
  render() {
    reurn (
      <div className="container-fluid">
        <p>Navigation goes here</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  childre: PropTypes.object.isRequired
}

export default App
