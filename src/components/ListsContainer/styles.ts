import { lighten } from 'polished'
import styled from 'styled-components'

export const Lists = styled.ul`
  margin-top: 1rem;
  flex: 1;
`

export const ListItem = styled.li`
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  height: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => lighten(0.5, theme.colors.themeBlue)};
  padding-left: 0.5rem;
  margin-bottom: 1rem;
`
