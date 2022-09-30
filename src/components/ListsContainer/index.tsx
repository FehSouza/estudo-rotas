import { useListsSelect } from '../../states'
import * as S from './styles'

export const List = () => {
  const lists = useListsSelect()

  return (
    <S.Lists>
      {lists.map((list) => (
        <S.ListItem key={list.id} color={list.color}>{list.name}</S.ListItem>
      ))}
    </S.Lists>
  )
}
