import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './docs/common/navigation'
import Button from './docs/pages/button'
import Input from './docs/pages/input'

const Library = () =>
  <Router>
    <div>
      <Navigation />
      <Route path="/button" component={Button} />
      <Route path="/input" component={Input} />
    </div>
  </Router>

ReactDOM.render(<Library />, document.getElementById('root'))
