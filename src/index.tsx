import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from '@noquarter/ui';

import * as serviceWorker from './serviceWorker';

import Application from './application';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    font-family: "Open sans", sans-serif;
    box-sizing: border-box;
    position: relative;
  }
`;

ReactDOM.render(
	<div>
		<GlobalStyle />
		<Application />
	</div>,
	document.getElementById('root'),
);

serviceWorker.unregister();
