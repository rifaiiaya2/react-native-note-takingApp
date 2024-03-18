import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  MainNavigatorNavigationProp,
  NoteListParams,
} from '../navigation/Main.Navigator.types';
import {useTheme} from '../store/contexts/ThemeContext';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Home = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const {isDarkMode, toggleDarkMode} = useTheme();
  const navigateToNoteList = () => {
    const params: NoteListParams = {
      title: '',
      noteDesc: '',
      notes: [],
    };
    navigation.navigate('NoteList', params);
  };
  return (
    <View style={[styles.Container, isDarkMode && styles.darkModeContainer]}>
      <Text style={[styles.TitleText, isDarkMode && styles.darkModeText]}>
        Welcome To Note-Taking App
      </Text>
      <TouchableOpacity onPress={navigateToNoteList}>
        <Image
          style={styles.TouchableImage}
          source={require('../assests/images/note.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleButton}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size={30}
          color={isDarkMode ? '#d1a132' : '#000'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  darkModeContainer: {
    backgroundColor: '#3d3d3d',
  },
  TitleText: {
    margin: 22,
    padding: 20,
    textAlign: 'center',
    lineHeight: 60,
    color: '#2f4f4f',
    fontWeight: '700',
    fontSize: 36,
    fontStyle: 'italic',
  },
  darkModeText: {
    color: '#fff',
  },
  TouchableImage: {
    width: 400,
    height: 470,
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
