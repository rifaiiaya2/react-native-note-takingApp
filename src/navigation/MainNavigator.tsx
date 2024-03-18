import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import InputNote from '../screens/InputNote';
import NoteList from '../screens/NoteList';

const MainNavigator = () => {
  const MainStackNavigator = createNativeStackNavigator();
  const screenOptions = {
    contentStyle: {
      backgroundColor: '#d3d3d3',
    },
    headerStyle: {
      backgroundColor: '#d3d3d3',
    },
    headerTintColor: '#2f4f4f',
    headerTitleStyle: {
      fontFamily: 'tahoma',
      fontSize: 18,
    },
  };
  return (
    <MainStackNavigator.Navigator screenOptions={screenOptions}>
      <MainStackNavigator.Screen
        name="Note Taking App"
        component={Home}
        options={{
          title: 'Note Taking App',
        }}
      />
      <MainStackNavigator.Screen
        name="NoteList"
        component={NoteList}
        options={{
          title: 'Our Notes',
        }}
      />
      <MainStackNavigator.Screen
        name="InputNote"
        component={InputNote}
        options={{
          title: 'New Note',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
