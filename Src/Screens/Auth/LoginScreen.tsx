import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  CommonTXTInputStyle,
  ContainerStyle,
} from '../../Components/Global/CommonContainerStyles';
import {
  blackcolor,
  Bluecolor,
  getFontSize,
  height,
  LightBlackcolor,
  LightGreycolor,
  LightLightBlackcolor,
  MediumFonts,
  RegularFonts,
  SemiBoldFonts,
  whitecolor,
  width,
} from '../../Components/Global/ColorsNdFonts';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {UiButtons} from '../../Components/UiComps/UIComps';
import {useNavigation} from '@react-navigation/native';
// import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackList} from '../../Navigators/AuthStack';
import {Center, PresenceTransition} from 'native-base';

const LoginScreen = () => {
  const [code, setcode] = useState(false);
  const [MobileNumber, SetMobileNumber] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackList>>();
  const [isOpen, setIsOpen] = React.useState(false);
  // if (code) {
  //   return (
  //     <SafeAreaView style={ContainerStyle}>
  //       <Animated.View style={styles.ImgConatiner}>
  //         <Image
  //           source={require('../../Assets/Icons/logo.jpeg')}
  //           style={styles.ImageStyl}
  //         />
  //       </Animated.View>
  //       <View
  //         style={{
  //           alignSelf: 'center',
  //           width: width * 0.88,
  //           marginTop: width * 0.14,
  //         }}>
  //         <View>
  //           <Text style={styles.TxtStyl}>{'Let’s Sign In'}</Text>
  //           <Text
  //             style={[
  //               styles.TxtStyl,
  //               {fontSize: getFontSize(16), fontFamily: RegularFonts},
  //             ]}>
  //             {`We have sent the verification code to your Phone number +91 ${MobileNumber}`}
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'space-between',
  //             marginTop: height * 0.04,
  //           }}>
  //           <TextInput
  //             maxLength={1}
  //             keyboardType="number-pad"
  //             style={{
  //               width: width * 0.14,
  //               height: width * 0.14,
  //               borderColor: LightGreycolor,
  //               borderWidth: 1,
  //               borderRadius: width * 0.02,
  //               paddingHorizontal: width * 0.02,
  //               textAlign: 'center',
  //               fontFamily: RegularFonts,
  //             }}
  //           />
  //           <TextInput
  //             maxLength={1}
  //             keyboardType="number-pad"
  //             style={{
  //               width: width * 0.14,
  //               height: width * 0.14,
  //               borderColor: LightGreycolor,
  //               borderWidth: 1,
  //               borderRadius: width * 0.02,
  //               paddingHorizontal: width * 0.02,
  //               textAlign: 'center',
  //               fontFamily: RegularFonts,
  //             }}
  //           />
  //           <TextInput
  //             maxLength={1}
  //             keyboardType="number-pad"
  //             style={{
  //               width: width * 0.14,
  //               height: width * 0.14,
  //               borderColor: LightGreycolor,
  //               borderWidth: 1,
  //               borderRadius: width * 0.02,
  //               paddingHorizontal: width * 0.02,
  //               textAlign: 'center',
  //               fontFamily: RegularFonts,
  //             }}
  //           />
  //           <TextInput
  //             maxLength={1}
  //             keyboardType="number-pad"
  //             style={{
  //               width: width * 0.14,
  //               height: width * 0.14,
  //               borderColor: LightGreycolor,
  //               borderWidth: 1,
  //               borderRadius: width * 0.02,
  //               paddingHorizontal: width * 0.02,
  //               textAlign: 'center',
  //               fontFamily: RegularFonts,
  //             }}
  //           />
  //         </View>
  //         <View style={{marginTop: width * 0.16}}>
  //           <TouchableOpacity
  //             onPress={() => {
  //               navigation.navigate('BottomStack');
  //             }}>
  //             <UiButtons
  //               txt="Next"
  //               bgcolor={blackcolor}
  //               fntfmly={SemiBoldFonts}
  //             />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }
  return (
    <SafeAreaView style={ContainerStyle}>
      <Animated.View style={styles.ImgConatiner}>
        <Image
          source={require('../../Assets/Icons/logo.jpeg')}
          style={styles.ImageStyl}
        />
      </Animated.View>
      <View
        style={{
          alignSelf: 'center',
          width: width * 0.88,
          marginTop: width * 0.14,
          flex: 1,
        }}>
        <View>
          <Text style={styles.TxtStyl}>{'Let’s Sign In'}</Text>
          <Text
            style={[
              styles.TxtStyl,
              {fontSize: getFontSize(16), fontFamily: RegularFonts},
            ]}>
            {'Enter phone number to send one time Password'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: height * 0.04,
          }}>
          <View
            style={{
              width: width * 0.14,
              paddingVertical: height * 0.018,
              borderRadius: width * 0.02,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: LightLightBlackcolor,
              borderColor: LightGreycolor,
              borderWidth: 1,
            }}>
            <Text style={{fontFamily: RegularFonts}}>+91</Text>
          </View>
          <TextInput
            maxLength={10}
            value={MobileNumber}
            onChangeText={txt => SetMobileNumber(txt)}
            keyboardType="number-pad"
            placeholder="Enter your mobile number"
            style={[
              CommonTXTInputStyle,
              {
                backgroundColor:
                  MobileNumber.length == 10 ? LightLightBlackcolor : whitecolor,
              },
            ]}
          />
        </View>
        <PresenceTransition
          visible={isOpen}
          initial={{
            opacity: 0,
          }}
          style={{marginTop: width * 0.04}}
          animate={{
            opacity: 1,
            transition: {
              duration: 250,
            },
          }}>
          <Text
            style={[
              styles.TxtStyl,
              {
                fontSize: getFontSize(16),
                fontFamily: RegularFonts,
                marginVertical: width * 0.01,
              },
            ]}>
            Enter OTP
          </Text>
          <TextInput
            maxLength={10}
            value={MobileNumber}
            onChangeText={txt => SetMobileNumber(txt)}
            keyboardType="number-pad"
            placeholder="Enter OTP ..."
            style={[
              CommonTXTInputStyle,
              {
                backgroundColor:
                  MobileNumber.length == 10 ? LightLightBlackcolor : whitecolor,
                width: width * 0.88,
                marginLeft: 0,
              },
            ]}
          />
        </PresenceTransition>
        <View style={{position: 'absolute', bottom: height * 0.02}}>
          <TouchableOpacity
            onPress={() => {
              isOpen ? navigation.navigate('BottomStack') : setIsOpen(!isOpen);
            }}>
            <UiButtons
              txt="Next"
              bgcolor={blackcolor}
              fntfmly={SemiBoldFonts}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  ImgConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: width * 0.1,
    // flex:1
  },
  ImageStyl: {
    width: width * 0.24,
    height: width * 0.24,
    resizeMode: 'contain',
    marginTop: width * 0.16,
    borderRadius: 100,
  },
  TxtStyl: {
    color: blackcolor,
    fontFamily: SemiBoldFonts,
    fontSize: getFontSize(24),
  },
});
