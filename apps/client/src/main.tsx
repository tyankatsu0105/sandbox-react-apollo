import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { client } from './api';
import { ApolloProvider } from '@apollo/react-hooks';

import { customTheme } from './styles/material-ui/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { App } from './app/app';

import { environment } from './environments/environment';

console.log(environment);

ReactDOM.render(
    <BrowserRouter>
          <App />
    </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <BrowserRouter>
//       <ThemeProvider theme={customTheme}>
//         <CssBaseline />
//           <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </ApolloProvider>,
//   document.getElementById('root')
// );
