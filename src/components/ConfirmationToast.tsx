import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
interface ConfirmationToastProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
const ConfirmationToast: React.FC<ConfirmationToastProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onConfirm}>
          <Text style={styles.button}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.button}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: '40%',
    width: '70%',
    right: '15%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#d3d3df',
    padding: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  message: {
    color: '#2f4f4f',
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    color: '#5F4065',
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
  },
});
export default ConfirmationToast;
