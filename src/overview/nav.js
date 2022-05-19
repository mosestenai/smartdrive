import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import Search from '../client/search';
import Viewdriver from '../client/viewdriver';
import Confirmdriver from '../client/confirmdriver';
import Mydrives from '../client/myrides';
import Notifications from '../client/notifications';
import Account from '../client/Account/account';
import { Steering } from '../Components/Materialicons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AccountStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const RidesStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();



function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In this case, it's "Home" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login';

  switch (routeName) {
    case 'Home':
      return 'Homee';
    case 'Login':
      return 'Loginn';
    case 'Settingss':
      return 'Settings';
    case 'Notificationss':
      return 'Notifications';
    case 'Register':
      return 'Register';

  }
}



function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='account'>
      <AccountStack.Screen name="account" component={Account} />
     
      {/* other screens */}
    </AccountStack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="viewdriver" component={Viewdriver} />
      <HomeStack.Screen name="confirmdriver" component={Confirmdriver} />
      
    </HomeStack.Navigator>
  );
}
function RidesStackScreen() {
  return (
    <RidesStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="rides">
      <RidesStack.Screen name="rides" component={Mydrives} />
    
      
      {/* other screens */}
    </RidesStack.Navigator>
  );
}
function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="notifications" >
      <NotificationsStack.Screen name="notifications" component={Notifications} />
      {/* other screens */}
    </NotificationsStack.Navigator>
  );
}

 function HomeTabs({ navigation, route }) {


  return (
    <Tab.Navigator 
   
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'drivers') {
          iconName = focused ? 'steering'
            : 'steering';
        } else if (route.name === 'Rides') {
          iconName = focused ? 'car' : 'car';
        } else if (route.name === 'Account') {
          iconName = focused ? 'account' : 'account';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'bell' : 'bell';
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#41d5fb',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarShowLabel:true,
      tabBarHideOnKeyboard: true
    })}
     
    >
     <Tab.Screen name='drivers' component={HomeStackScreen} />
      <Tab.Screen name="Rides" component={RidesStackScreen} />
      <Tab.Screen name="Notifications" component={NotificationsStackScreen} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
     
    </Tab.Navigator>
   
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='default'>
      
        <Stack.Screen name="default" component={HomeTabs} options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}