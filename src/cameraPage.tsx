import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useEffect} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraPage = ({navigation}) => {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {photoAspectRatio: 3 / 4},
    {photoResolution: 'max'},
    {autoFocusSystem: 'contrast-detection'},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000000'} />
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
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={Styles.instruction}>Posisikan Tangan Kamu</Text>
      </View>
      <Camera
        style={Styles.viewFinder}
        device={device}
        isActive={true}
        format={format}
        photo={true}
      />
      <TouchableOpacity
        style={Styles.shutterButton}
        onPress={() => {
          navigation.navigate('CheckPhotoPage');
        }}></TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 5,
  },
  instruction: {
    color: '#cc3663',
    backgroundColor: '#fefefe',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: '700',
    fontSize: 20,
    borderRadius: 30,
    marginVertical: 20,
  },
  shutterButton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: '#cc3663',
    borderWidth: 5,
    backgroundColor: '#fefefe',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    zIndex: 4,
  },
  viewFinder: {
    width: '100%', 
    aspectRatio: 3 / 4,
    justifyContent: 'center',
  },
  guideline: {
    zIndex: 3,
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderColor: '#cc3663',
    borderWidth: 5,
    opacity: 0.7,
  },
});

export default CameraPage;
