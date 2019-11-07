import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/Theme'
import Main from './pages/Main'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main/>
      </div>
    </ThemeProvider>
  );
}

export default App;
