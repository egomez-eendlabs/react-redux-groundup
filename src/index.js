import React from 'react'
import {Router, browserHistory} from 'react-router'
import {render} from 'react-dom'

import routes from './routes'
import './styles/styles.css' //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(<Router history={browserHistory} routes={routes} />,
  document.getElementById('app'))
