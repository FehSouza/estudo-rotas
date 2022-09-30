import { lighten } from 'polished'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white}8D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  position: fixed;
  bottom: 0;
  left: calc(((100% - 50% - 2rem) * 0.25) + 1.5rem);
  width: calc(50% - 2rem - 2rem - ((100% - 50% - 2rem) * 0.25) - 1.5rem + 0.25rem);
  height: 10rem;
  margin: 2.8rem;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 1.125rem;
`

export const ThemesWrapper = styled.ul`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`

export const Theme = styled.li<{ colorTheme: Color, select: boolean }>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 100%;
  border: 0.125rem solid ${({ theme, select, colorTheme }) => select ? theme.colors[colorTheme] : theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
`

export const ThemeInternal = styled.div<{ colorTheme: Color }>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 0.125rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, colorTheme }) => (colorTheme ? theme.colors[colorTheme] : theme.colors.themeBlue)};

  &:hover {
    cursor: pointer;
  }
`

export const InputButton = styled.div`
  flex: 1;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.themeBlue};
  border-radius: 0.5rem;
  transition-duration: 350ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    border: 0.0625rem solid ${({ theme }) => lighten(0.15, theme.colors.themeBlue)};
  }
`

export const Button = styled.button`
  min-width: 2.5rem;
  max-width: 7rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  border: 0.09375rem solid ${({ theme }) => theme.colors.themeBlue};
  border-radius: 0.5rem;
  transition-duration: 350ms;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: lowercase;
  display: inline-block;
  &:first-letter {
    text-transform: capitalize;
  }

  &:hover {
    background-color: ${({ theme }) => lighten(0.15, theme.colors.themeBlue)};
    border: 0.09375rem solid ${({ theme }) => lighten(0.15, theme.colors.themeBlue)};
  }
`
