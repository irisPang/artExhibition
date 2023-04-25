import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
