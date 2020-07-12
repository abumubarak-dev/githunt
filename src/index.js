import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import App from './app.jsx';
 
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
 