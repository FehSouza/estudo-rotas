import { ThemeProvider } from 'styled-components'
import { Routes } from './Routes'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

export const App = () => {
  return (
      <ThemeProvider theme={theme.base}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
  )
}
