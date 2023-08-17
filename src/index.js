import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Example1 } from './Example1';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publications from './publications.json';

const theme = {};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Example1 />
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>
);
