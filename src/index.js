import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import 'fontsource-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import reportWebVitals from './reportWebVitals';

// We need to create a single class name generator and then pass that into a StyleProvider
// component that is wrapping our main App component. This will ensure that all style names
// generated for production builds have consistently incremented names so there are no duplicated
// CSS/JSS class names.
// https://material-ui.com/getting-started/faq/#why-arent-my-components-rendering-correctly-in-production-builds
const classNameGenerator = createGenerateClassName({
    productionPrefix: 'dash-',
});

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider generateClassName={classNameGenerator} injectFirst>
            <App />
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
