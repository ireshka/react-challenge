import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme';

import Router from './pages/routing';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>
);

export default App;
