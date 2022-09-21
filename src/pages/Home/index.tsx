import { Link } from 'react-router-dom'
import * as S from './styles'

export const Home = () => {
  return (
    <>
      <S.Span>Home</S.Span>

      <Link to="/lists">Lists</Link>
      
      <Link to="/tasks">Tasks</Link>
    </>
  )
}
