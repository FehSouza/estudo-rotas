import { useListsSelect } from '../../states'
import * as S from './styles'

export const List = () => {
  const lists = useListsSelect()

  return (
    <S.Lists>
      {lists.map((list) => (
        <S.ListItem key={list.id}>{list.name}</S.ListItem>
      ))}
    </S.Lists>
  )
}
