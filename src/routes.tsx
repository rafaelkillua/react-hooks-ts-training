import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/Home"
import UseContextPage from "./pages/UseContext"
import UseEffectPage from "./pages/UseEffect"
import UseMemoPage from "./pages/UseMemo"
import UseReducerPage from "./pages/UseReducer"
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
  },
  {
    label: 'useMemo',
    path: '/useMemo',
    exact: false,
    component: UseMemoPage
  },
  {
    label: 'useContext',
    path: '/useContext',
    exact: false,
    component: UseContextPage
  },
  {
    label: 'useReducer',
    path: '/useReducer',
    exact: false,
    component: UseReducerPage
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
