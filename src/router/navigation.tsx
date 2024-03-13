import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomePage,
  LoginPage,
  GroupListPage,
  CameraPage,
  RegistName,
  RegistRole,
  RegistInstitutionBK,
  RegistInstitutionWK,
  RegistAccount,
  AddStudentDataPage,
  ReminderPage, 
  CheckPhotoPage, 
  ResultPage
} from '..';

import Tabs from './bottomBarNavigaton';

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
        name="GroupListPage"
        component={GroupListPage}
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
      <Stack.Screen
      name="AddStudentData"
      component={AddStudentDataPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="ReminderPage"
      component={ReminderPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="CheckPhotoPage"
      component={CheckPhotoPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="ResultPage"
      component={ResultPage}
      options={{headerShown: false}}
      />
      <Stack.Screen name="BottomNav" component={Tabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default Navigation;
