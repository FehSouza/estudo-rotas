import { Link } from 'react-router-dom'
import * as S from './styles'

export const Tasks = () => {
  return (
    <>
      <S.Span>Tasks</S.Span>

      <Link to="/">Home</Link>
    </>
  )
}
