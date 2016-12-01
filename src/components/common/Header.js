import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
  render() {
    return (
    <nav>
      <Link to="home" activeClassName="active">Home</Link>
      { ' | '}
      <Link to="about" activeClassName="active">About</Link>
    </nav>
    )
  }
}

export default Header
