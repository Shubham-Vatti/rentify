// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';
// import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { Bluecolor, LightGreycolor } from '../Components/Global/ColorsNdFonts';
// import SearchPropertyScreen from '../Screens/ExploreProperties/SearchPropertyScreen';
// import ChatScreens from '../Screens/ChatScreens/ChatScreens';

// const Bottom = createBottomTabNavigator();

// export type BottomRootStackList = {
//   Home: undefined;
//   Profile: undefined;
//   Search:undefined;
//   Chat:undefined;
// };

// const BottomStack = () => {
//   return (
//     <Bottom.Navigator
//     screenOptions={{headerShown:false}}
//     >
//       <Bottom.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return !focused ? (
//               <AntDesign name="home" size={24} color={LightGreycolor} />
//             ) : (
//               <Entypo name="home" size={24} color={Bluecolor} />
//             );
//           },
//         }}
//       />
//       <Bottom.Screen name="Search" component={SearchPropertyScreen}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return !focused ? (
//               <FontAwesome name="user-o" size={24} color={LightGreycolor} />
//             ) : (
//               <FontAwesome name="user" size={24} color={Bluecolor} />
//             );
//           },
//         }}/>
//         <Bottom.Screen name="Chat" component={ChatScreens}
//           options={{
//             tabBarIcon: ({focused}) => {
//               return !focused ? (
//                 <FontAwesome name="user-o" size={24} color={LightGreycolor} />
//               ) : (
//                 <FontAwesome name="user" size={24} color={Bluecolor} />
//               );
//             },
//           }}/>
//           <Bottom.Screen name="Account" component={ProfileScreen}
//             options={{
//               tabBarIcon: ({focused}) => {
//                 return !focused ? (
//                   <FontAwesome name="user-o" size={24} color={LightGreycolor} />
//                 ) : (
//                   <FontAwesome name="user" size={24} color={Bluecolor} />
//                 );
//               },
//             }}/>
//     </Bottom.Navigator>
//   );
// };

// export default BottomStack;

// const styles = StyleSheet.create({});

import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomStack = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {key: 'albums', title: 'Albums', focusedIcon: 'album'},
    {key: 'recents', title: 'Recents', focusedIcon: 'history'},
    {
      key: 'notifications',
      title: 'Account',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    Account: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomStack;

// const styles = StyleSheet.create({});
