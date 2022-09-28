import { Route, Routes as RoutesReact, useLocation } from 'react-router-dom'
import { Container } from './components'
import { Home } from './pages/Home'
import { Lists } from './pages/Lists'
import { ModalAddList } from './pages/ModalAddList'
import { Tasks } from './pages/Tasks'

interface LocationState {
  backgroundLocation?: Location
}

export const Routes = () => {
  const location = useLocation()
  const state = location.state as LocationState

  return (
    <>
      <RoutesReact location={state?.backgroundLocation || location}>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/lists">
            <Route index element={<Lists />} />
            <Route path="new" element={<ModalAddList />} />
          </Route>
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </RoutesReact>

      {state?.backgroundLocation && (
        <RoutesReact>
          <Route path="/lists">
            <Route path="new" element={<ModalAddList />} />
          </Route>
        </RoutesReact>
      )}
    </>
  )
}
