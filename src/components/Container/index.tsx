import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { List } from '../ListsContainer'
import * as S from './styles'

export const Container = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <S.Container>
      <S.ListsContainer>
        <S.Title>Lists</S.Title>

        <List></List>

        <S.ButtonAddList>
          <p onClick={() => navigate('lists/new', { state: { backgroundLocation: location } })}>Add list</p>
        </S.ButtonAddList>
      </S.ListsContainer>

      <S.TasksContainer>
        <Outlet />
      </S.TasksContainer>
    </S.Container>
  )
}
