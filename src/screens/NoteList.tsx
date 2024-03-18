import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {
  MainNavigatorNavigationProp,
  MainNavigatorRouteProp,
} from '../navigation/Main.Navigator.types';
import {useTheme} from '../store/contexts/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
const NoteList = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const route = useRoute<MainNavigatorRouteProp<'NoteList'>>();
  const notes = route.params?.notes || [];
  const [showDeleteButton, setShowDeleteButton] = useState<number | null>(null);
  const {isDarkMode} = useTheme();

  const handleAddNote = () => {
    navigation.navigate('InputNote', {
      title: '',
      noteDesc: '',
      notes: route.params?.notes || [],
    });
  };
  const handleNoteLongPress = (_index: number) => {
    setShowDeleteButton(_index);
  };
  const handleDeleteNote = (index: number) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        onPress: () => {
          setShowDeleteButton(null);
        },
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const updatedNotes = [...notes];
          updatedNotes.splice(index, 1);
          navigation.setParams({notes: updatedNotes});
          setShowDeleteButton(null);
        },
      },
    ]);
  };

  return (
    <ScrollView>
      <View
        style={[
          styles.headerContainer,
          isDarkMode && styles.darkModeContainer,
        ]}>
        <Text style={[styles.header, isDarkMode && styles.darkModeText]}>
          Our Note List
        </Text>
        <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
          <FontAwesomeIcon icon={faPlus} size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      {notes.map((note: {title: string; noteDesc: string}, index: number) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.noteContainer,
            isDarkMode && styles.darkModeNoteContainer,
          ]}
          onLongPress={() => handleNoteLongPress(index)}>
          {showDeleteButton === index && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteNote(index)}>
              <FontAwesomeIcon icon={faTrashAlt} size={20} color="#fff" />
            </TouchableOpacity>
          )}
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>
            Title:
          </Text>
          <Text
            style={[
              styles.notesDetails,
              isDarkMode && styles.notesDetailsDark,
            ]}>
            {note.title}
          </Text>
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>
            Note Description:
          </Text>
          <Text
            style={[
              styles.notesDetails,
              isDarkMode && styles.notesDetailsDark,
            ]}>
            {note.noteDesc}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  darkModeContainer: {
    backgroundColor: '#3d3d3d',
  },
  header: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginVertical: 10,
    color: '#5F4065',
  },
  darkModeText: {
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#5F4065',
    borderRadius: 50,
    padding: 12,
  },
  noteContainer: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: '#5F4065',
    backgroundColor: '#dfdfdf',
    padding: 12,
    marginVertical: 5,
    margin: 20,
  },
  darkModeNoteContainer: {
    backgroundColor: '#3d3d3d',
    borderColor: '#5F4065',
    borderWidth: 2,
  },
  label: {
    color: '#5F4065',
    fontStyle: 'italic',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
  labelDark: {
    color: '#c97fc9',
  },
  notesDetails: {
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 5,
    color: '#2f4f4f',
  },
  notesDetailsDark: {
    color: '#fff',
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF6347', // or any other color for delete button
    borderRadius: 20,
    padding: 5,
  },
});
export default NoteList;
