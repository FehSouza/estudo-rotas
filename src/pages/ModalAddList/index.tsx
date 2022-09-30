import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addList, getLists } from '../../states'
import { Color } from '../../styles/theme'
import { customStorage } from '../../utils'
import * as S from './styles'

const MOCK_COLORS_THEME: Color[] = [
  'themeBlue',
  'themePurple',
  'themePink',
  'themeOrange',
  'themeYellow',
  'themeGreen',
  'themeRed',
]

export const ModalAddList = () => {
  const navigate = useNavigate()
  const [listName, setListName] = useState('')
  const [colorSelected, setColorSelected] = useState<Color>('themeBlue')

  const handleAddList = () => {
    if (listName.length <= 3) return

    addList(listName, colorSelected)
    customStorage.setItem('lists', getLists())
    setListName('')
    setColorSelected('themeBlue')
    navigate('/lists')
  }

  return (
    <Fragment>
      <S.Modal onClick={() => navigate('/lists')}>
        <S.Content onClick={(e) => e.stopPropagation()}>
          <S.Title>List title</S.Title>

          <S.InputButton>
            <S.Input value={listName} onChange={(e) => setListName(e.target.value)} />
            <S.Button onClick={() => handleAddList()}>+</S.Button>
          </S.InputButton>

          <S.ThemesWrapper>
            {MOCK_COLORS_THEME.map((color) => (
              <S.Theme
                key={color}
                colorTheme={color}
                select={color === colorSelected ? true : false}
                onClick={() => setColorSelected(color)}
              >
                <S.ThemeInternal colorTheme={color} />
              </S.Theme>
            ))}
          </S.ThemesWrapper>
        </S.Content>
      </S.Modal>
    </Fragment>
  )
}
