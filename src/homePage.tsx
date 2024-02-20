import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const HomePage = ({navigation}) => {

  return (
    <View>
      <View style={{marginRight: 10, marginTop: 20}}>
        <TouchableOpacity style={Styles.loginButton} onPress={() => {navigation.navigate('LoginPage')}}>
          <Text style={Styles.loginText}>Log in</Text>
          <Image
            style={Styles.avatar}
            source={require('../assets/icons/Avatar.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/palm_fluent.png')}
          />
          <Text style={Styles.textCard}>Apa itu Palmistry?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/palmline.png')}
          />
          <Text style={Styles.textCard}>Macam-macam Garis Tangan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/indexfinger_fluent.png')}
          />
          <Text style={Styles.textCard}>
            Gaya belajar yang cocok sesuai kepribadian anak!
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.button} onPress={() => {navigation.navigate('CameraPage')}}>
        <Text style={Styles.textButton}>Mulai Prediksi</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  loginButton: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#00000000',
    flexDirection: 'row',
  },
  loginText: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    alignSelf: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 8,
  },
  imageObjects: {
    width: 100,
    height: 100,
    margin: 16,
  },
  textCard: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000000',
    alignSelf: 'center',
    marginRight: 200,
  },
  button: {
    backgroundColor: '#CC3663',
    marginHorizontal: 20,
    marginVertical: 40,
    verticalAlign: "bottom" ,
    borderRadius: 15,
  },
  textButton: {
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 14,
  }
});

export default HomePage;
