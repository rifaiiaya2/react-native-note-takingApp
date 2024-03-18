import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {ThemeProvider} from './src/store/contexts/ThemeContext';

const App = () => {
  return (
    // <NavigationContainer>
    //   <MainNavigator />
    // </NavigationContainer>
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
