import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePageLogedIn from '../logedIn/homePageLogedIn';
import GroupListPage from '../logedIn/groupListPage';
import ProfilePage from '../logedIn/profilePage';
import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  let HomeSelectedIcon = require('../../assets/icons/icon_Home_selected.png');
  let HomeUnselectedIcon = require('../../assets/icons/icon_Home.png');
  let GroupSelectedIcon = require('../../assets/icons/icon_Group_selected.png');
  let GroupUnselectedIcon = require('../../assets/icons/icon_Group.png');
  let ProfileSelectedIcon = require('../../assets/icons/icon_Profile_selected.png');
  let ProfileUnselectedIcon = require('../../assets/icons/icon_Profile.png');

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
                source={focused ? HomeSelectedIcon : HomeUnselectedIcon}
                style={{width: 30, height: 30}}
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
                source={focused ? GroupSelectedIcon : GroupUnselectedIcon}
                style={{width: 30, height: 30}}
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
                source={focused ? ProfileSelectedIcon : ProfileUnselectedIcon}
                style={{width: 30, height: 30}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
