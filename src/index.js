import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './docs/common/navigation'
import components from './docs/pages/_components'

/*
  Skeleton for the component library
  Show the navigation + space for doc pages
*/
const Library = () =>
  <Router>
    <div>
      <Navigation />
      {components.map(component =>
        <Route
          key={component.name}
          path={`/${component.name.toLowerCase()}`}
          component={component.module}
        />
      )}
    </div>
  </Router>

ReactDOM.render(<Library />, document.getElementById('root'))
