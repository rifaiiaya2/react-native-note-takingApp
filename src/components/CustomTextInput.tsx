import {Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React from 'react';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  height?: number;
  isDarkMode: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  multiline,
  height = 65,
  isDarkMode,
}) => {
  const containerStyle = {
    ...styles.Textinput,
    height,
    borderColor: isDarkMode ? '#5F4065' : '#5F4065',
    color: isDarkMode ? '#ffff' : '#2f4f4f',
  };
  return (
    <>
      {label && (
        <Text style={[styles.label, isDarkMode && styles.labelDark]}>
          {label}
        </Text>
      )}
      <TextInput
        style={containerStyle}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? '#fff' : '#5F4065'}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Textinput: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#5F4065',
    width: '80%',
    marginTop: 13,
    marginLeft: 40,
    padding: 18,
  },
  label: {
    marginTop: 16,
    marginLeft: 20,
    paddingRight: 18,
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#2f4f4f',
  },
  labelDark: {
    color: '#c97fc8',
  },
});

export default CustomTextInput;
