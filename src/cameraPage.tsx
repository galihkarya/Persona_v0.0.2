import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useEffect, useState, useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  PhotoFile,
  TakePhotoOptions,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

const CameraPage = ({navigation}) => {
  const flashOnIcon = require('../assets/icons/icon_flash_on.png');
  const flashOffIcon = require('../assets/icons/icon_flash_off.png');

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

  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off');

  const [photo, setPhoto] = useState<PhotoFile>();

  const camera = useRef<Camera>(null);

  const onTakePicturePressed = async () => {
    const photo = await camera.current?.takePhoto({flash});
    setPhoto(photo);
  };

  const uploadPhoto = async () => {
    if (!photo) {
      return;
    }
    const result = await fetch(`file://${photo.path}`);
    const data = await result.blob();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000000'} />

      {photo ? (
        <>
          <View style={{backgroundColor: 'black', flex: 1}}>
            <View style={{height: 80}} />
            <Image source={{uri: photo.path}} style={Styles.viewFinder} />
            <View
              style={{
                position: 'absolute',
                bottom: 50,
                alignSelf: 'center',
                width: '100%',
                gap: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#CC3663',
                  marginHorizontal: 20,
                  borderRadius: 15,
                }}
                onPress={() => {
                  navigation.replace('ResultPage');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    paddingVertical: 15,
                    fontSize: 14,
                  }}>
                  lanjut ...
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFFFFF',
                  marginHorizontal: 20,
                  borderRadius: 15,
                  borderColor: '#CC3663',
                  borderWidth: 3,
                }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#CC3663',
                    paddingVertical: 15,
                    fontSize: 14,
                  }}>
                  ulang foto
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
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
            ref={camera}
            style={Styles.viewFinder}
            device={device}
            isActive={true}
            format={format}
            photo={true}
            orientation='portrait'

          />
          <TouchableOpacity
            style={Styles.shutterButton}
            onPress={onTakePicturePressed}
          />
          <TouchableOpacity
            onPress={() =>
              setFlash(curValue => (curValue === 'off' ? 'on' : 'off'))
            }
            style={Styles.flashButton}>
            <Image
              source={flash === 'on' ? flashOnIcon : flashOffIcon}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </>
      )}
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
  flashButton: {
    position: 'absolute',
    zIndex: 2,
    bottom: 65,
    right: 70,
    padding: 10,
  },
});

export default CameraPage;
