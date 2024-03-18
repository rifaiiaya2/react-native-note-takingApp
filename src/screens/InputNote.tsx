import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  MainNavigatorNavigationProp,
  MainNavigatorRouteProp,
} from '../navigation/Main.Navigator.types';
import CustomTextInput from '../components/CustomTextInput';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFloppyDisk, faBan} from '@fortawesome/free-solid-svg-icons';
import ConfirmationToast from '../components/ConfirmationToast';
import {useTheme} from '../store/contexts/ThemeContext';

const InputNote = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const route = useRoute<MainNavigatorRouteProp<'InputNote'>>();
  const [title, setTitle] = useState('');
  const [noteDesc, setNoteDesc] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {isDarkMode} = useTheme();

  const validateNote = () => {
    if (!title.trim() || !noteDesc.trim()) {
      ToastAndroid.show('You cannot add an empty note.', ToastAndroid.SHORT);
      return false;
    }
    return true;
  };
  const handleSaveNoteBtn = () => {
    if (validateNote()) {
      const updatedNotes = [...route.params.notes, {title, noteDesc}];
      navigation.goBack();
      navigation.navigate('NoteList', {
        title: 'Title',
        notes: updatedNotes,
      });
      setTitle('');
      setNoteDesc('');
    }
  };

  const handleCancelNoteBtn = () => {
    setShowConfirmation(true);
  };
  const handleConfirmCancel = () => {
    navigation.goBack();
    setShowConfirmation(false);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
  };
  return (
    <View style={[styles.Container, isDarkMode && styles.darkModeContainer]}>
      <CustomTextInput
        label="Note Title"
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
        isDarkMode={isDarkMode}
      />
      <CustomTextInput
        label="Note Description"
        placeholder="Write Your Note...!"
        value={noteDesc}
        onChangeText={setNoteDesc}
        multiline
        height={230}
        isDarkMode={isDarkMode}
      />
      <View style={styles.BtnContainer}>
        <TouchableOpacity onPress={handleSaveNoteBtn} style={styles.button}>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            size={30}
            color={isDarkMode ? '#c97fc8' : '#5F4065'}
          />
          <Text
            style={[
              styles.buttonText,
              isDarkMode && styles.darkModeButtonText,
            ]}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancelNoteBtn} style={styles.button}>
          <FontAwesomeIcon
            icon={faBan}
            size={30}
            color={isDarkMode ? '#c97fc8' : '#5F4065'}
          />
          <Text
            style={[
              styles.buttonText,
              isDarkMode && styles.darkModeButtonText,
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
        {showConfirmation && (
          <ConfirmationToast
            message="Are you sure you want to cancel this note?"
            onConfirm={handleConfirmCancel}
            onCancel={handleCancelConfirmation}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  darkModeContainer: {
    backgroundColor: '#3d3d3d',
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 23,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 12,
    color: '#2f4f4f',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  darkModeButtonText: {
    color: '#fcfafc',
  },
});
export default InputNote;
