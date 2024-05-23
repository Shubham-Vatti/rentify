import { Dimensions, PixelRatio } from "react-native";


// Colors

export const whitecolor:string='white';
export const blackcolor:string='black';
export const Bluecolor:string='#0072FE'
export const LightBluecolor:string='rgba(57,106,244,1)'
export const LightBlackcolor:string='rgba(0,0,0,0.8)'
export const LightLightBlackcolor:string='rgba(0,0,0,0.06)'
export const LightGreycolor:string='rgba(0,0,0,0.2)'


// Responsive Font size

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size:number) => size / fontScale;


// Font Types

export const LightFonts:string='Poppins-Light';
export const MediumFonts:string='Poppins-Medium';
export const RegularFonts:string='Poppins-Regular';
export const SemiBoldFonts:string='Poppins-SemiBold';
export const BoldFonts:string='Poppins-Bold';
export const ExtraBoldFonts:string='Poppins-ExtraBold';
export const ThinFonts:string='Poppins-Thin';


//Responsive Height Width of Screen 

export const {height,width}=Dimensions.get('window')

