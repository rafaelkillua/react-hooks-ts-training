import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/Home"

export const routes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  },
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
