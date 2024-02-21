import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

const RegistAccount = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={Styles.backButton}
        hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={Styles.backIcon}
          source={require('../assets/icons/icon_arrowLeft.png')}
        />
      </TouchableOpacity>
      <View style={{marginTop: 0, marginBottom: 30, alignItems: 'center'}}>
        <Image
          style={Styles.imageCenter}
          source={require('../assets/icons/account.png')}
        />
        <Text style={Styles.head1}>Akun</Text>
        <Text style={Styles.head2}>Masukkan username dan password yang bagus</Text>
      </View>
      <View style={{margin: 20}}>
        <TextInput style={Styles.input} placeholder="username" />
        <TextInput style={Styles.input} placeholder="password" />
        <TextInput style={Styles.input} placeholder="ketik ulang password" />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            navigation.navigate('HomePageLogedIn');
          }}>
          <Text style={Styles.textButton}>lanjut ...</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  backIcon: {
    width: 20,
    height: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: 30,
    marginHorizontal: 20,
  },
  imageCenter: {
    width: 200,
    height: 200,
  },
  head1: {
    fontWeight: '700',
    fontSize: 40,
    color: 'black',
    marginVertical: 20,
  },
  head2: {
    fontSize: 16,
    maxWidth: 200, 
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fefefe',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#00000050',
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#CC3663',
    marginVertical: 25,
    verticalAlign: 'bottom',
    borderRadius: 15,
  },
  textButton: {
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 16,
  },
});

export default RegistAccount;
