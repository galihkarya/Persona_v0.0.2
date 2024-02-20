import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePageLogedIn from '../logedIn/homePageLogedIn';
import GroupListPage from '../logedIn/groupListPage';
import ProfilePage from '../logedIn/profilePage';
import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#CC3663',
          height: 75,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePageLogedIn}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/icon_Home_selected.png')}
                style={{width: 30, height: 30, opacity: focused ? 1 : 0.3}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupListPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/icon_Group_selected.png')}
                style={{width: 30, height: 30, opacity: focused ? 1 : 0.3}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/icon_Profile_selected.png')}
                style={{width: 30, height: 30, opacity: focused ? 1 : 0.3}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
