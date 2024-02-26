import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'

const AddStudentDataPage = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={Styles.backButton}
        hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={Styles.backIcon}
          source={require('../../assets/icons/icon_arrowLeft.png')}
        />
      </TouchableOpacity>
      <Text style={Styles.instructionText}>Masukkan data diri kamu!</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  backIcon: {
    width: 20,
    height: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  instructionText: {
    color: 'black', 
    textAlign: 'center',
    fontWeight: '300'
  },
});
export default AddStudentDataPage;
