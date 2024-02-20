import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CameraPage = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={Styles.backButton}
          hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={Styles.backIcon}
            source={require('../assets/icons/icon_arrowLeftCircled.png')}
          />
        </TouchableOpacity>
        <View>
          <Text style={Styles.instruction}>Posisikan Tangan Kamu</Text>
        </View>
      </View>
      <View style={Styles.viewFinder}>

      </View>
      <TouchableOpacity style={Styles.shutterButton}></TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  instruction: {
    color: '#cc3663',
    backgroundColor: '#fefefe',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: '700',
    fontSize: 20,
    borderRadius: 30,
  },
  shutterButton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: '#cc3663',
    borderWidth: 5,
    backgroundColor: '#fefefe',
    alignSelf: 'center',
    margin: 30
  },
  viewFinder: {
    backgroundColor: '#00b140',
    aspectRatio: 3/4,
    
  }
});

export default CameraPage;
