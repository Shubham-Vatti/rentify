import {Text} from 'native-base';
import {View} from 'react-native';
import {
  blackcolor,
  Bluecolor,
  BoldFonts,
  ExtraBoldFonts,
  getFontSize,
  height,
  MediumFonts,
  RegularFonts,
  SemiBoldFonts,
  whitecolor,
  width,
} from '../Global/ColorsNdFonts';
import React from 'react';


type UiButtonprops={
  bgcolor:string,
  txt:string,
  fntfmly:string
}

export const UiButtons:React.FC<UiButtonprops> = ({txt,bgcolor,fntfmly}) => {
  return (
    <View
      style={{
        backgroundColor: bgcolor,
        width: width * 0.88,
        paddingVertical: height * 0.018,
        borderRadius: width*0.02,
        borderColor:blackcolor,
        borderWidth:1
      }}>
      <Text
        style={{
          fontFamily: fntfmly,
          textAlign: 'center',
          color: whitecolor,
          fontSize: getFontSize(16),
        }}>
        {txt}
      </Text>
    </View>
  );
};
