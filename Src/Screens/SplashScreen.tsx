import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ContainerStyle} from '../Components/Global/CommonContainerStyles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackList} from '../Navigators/AuthStack';
import {
  Bluecolor,
  height,
  whitecolor,
  width,
} from '../Components/Global/ColorsNdFonts';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

setTimeout(()=>{
  navigation.navigate('LoginScreen1')
},1000)
  return (
    <SafeAreaView
      style={[
        ContainerStyle,
        {backgroundColor: Bluecolor, alignItems: 'center'},
      ]}>
      <SafeAreaView style={{marginTop: width * 0.2}}>
        <Image
          source={require('../Assets/Icons/Logotxt.jpeg')}
          style={{
            width: width * 0.9,
            height: width * 0.9,
            resizeMode: 'contain',
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={{position: 'absolute', bottom: height * 0.1}}>
        <ActivityIndicator color={whitecolor} size={'large'} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
