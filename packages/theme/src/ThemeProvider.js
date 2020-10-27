import {ThemeProvider as _ThemeProvider} from 'styled-components';
import {theme} from './theme';
import GlobalStyle from './GlobalStyle';


const ThemeProvider = ({children}) => (
  <_ThemeProvider theme={theme}>
    <GlobalStyle/>
    {children}
  </_ThemeProvider>
);

export default ThemeProvider;
