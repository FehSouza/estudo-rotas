import { Route, Routes as RoutesReact } from 'react-router-dom'
import { Home } from './pages/Home'
import { Lists } from './pages/Lists'
import { Tasks } from './pages/Tasks'

export const Routes = () => {
  return (
    <RoutesReact>
      <Route element={<Home />} index />
      <Route element={<Lists />} path="/lists" />
      <Route element={<Tasks />} path="/tasks" />
    </RoutesReact>
  )
}
