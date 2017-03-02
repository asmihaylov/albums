// import a library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a Component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

// render it to the device
AppRegistry.registerComponent('albums', () => App);
