import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './docs/common/navigation'
import components from './docs/pages/_components'

const Library = () =>
  <Router>
    <div>
      <Navigation />
      {console.log(components[0])}
      {components.map(component =>
        <Route
          key={component.name}
          path={`/${component.name}`}
          component={component.module}
        />
      )}
    </div>
  </Router>

ReactDOM.render(<Library />, document.getElementById('root'))
