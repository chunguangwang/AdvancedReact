import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import DataApi from '../DataApi';

const store = new DataApi(window.initialData);

ReactDOM.hydrate(
    <App store={store} />,
    document.getElementById('root')
);