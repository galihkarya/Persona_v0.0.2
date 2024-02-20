import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomePage,
  LoginPage,
  HomePageLogedIn,
  GroupListPage,
  ProfilePage,
  CameraPage,
  RegistName,
  RegistRole,
  RegistInstitutionBK,
  RegistInstitutionWK,
  RegistAccount,
} from '..';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CameraPage"
        component={CameraPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePageLogedIn"
        component={HomePageLogedIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroupListPage"
        component={GroupListPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistName"
        component={RegistName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistRole"
        component={RegistRole}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistInstitutionBK"
        component={RegistInstitutionBK}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistInstitutionWK"
        component={RegistInstitutionWK}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistAccount"
        component={RegistAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
