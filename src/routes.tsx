import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/Home"
import UseEffectPage from "./pages/UseEffect"
import UseStatePage from "./pages/UseState"

export const routes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    label: 'useState',
    path: '/useState',
    exact: false,
    component: UseStatePage
  },
  {
    label: 'useEffect',
    path: '/useEffect',
    exact: false,
    component: UseEffectPage
  }
]

const Routes = () => (
  <Switch>
    {
      routes.map(route => (
        <Route
          key={route.label}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))
    }
  </Switch>
)

export default Routes
