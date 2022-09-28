import styled from 'styled-components'

export const Container = styled.main`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `0 0 0.375rem ${theme.colors.shadow}`};
  border-radius: 0.5rem;
  display: flex;
`

export const ListsContainer = styled.div`
  width: 30%;
  padding: 1rem;
  padding-right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`

export const ButtonAddList = styled.button`
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  text-align: start;
  height: 2rem;
  margin-top: 1rem;
`

export const TasksContainer = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`
