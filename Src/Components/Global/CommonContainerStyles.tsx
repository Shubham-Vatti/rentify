import {height, LightBlackcolor, LightGreycolor, LightLightBlackcolor, RegularFonts, whitecolor, width} from './ColorsNdFonts';

export const ContainerStyle = {
  flex: 1,
  backgroundColor: whitecolor,
  width,
};

export const CommonTXTInputStyle = {
  width: width * 0.7,
  borderColor: LightGreycolor,
  borderWidth: 1,
  paddingVertical: height * 0.016,
  borderRadius: width * 0.02,
  paddingHorizontal: width * 0.02,
  marginLeft: width * 0.04,
//   fontfamily:RegularFonts
fontFamily: RegularFonts,
};

// Welcome Screen Slide

export const WelcomeSlide = [
  {
    id: 1,
    // img:require('../../Assets/Images'),
    Title: 'Welcome to Rentify',
    Desc: 'Find your perfect home, paying guest, or flat for rent or sale.',
  },
  {
    id: 2,
    // img:require('../../Assets/Images'),
    Title: 'Discover Paying Guests',
    Desc: 'Explore a variety of paying guest accommodations in your desired location.',
  },
  {
    id: 3,
    // img:require('../../Assets/Images'),
    Title: 'Find Your Dream Flat',
    Desc: 'Search through a range of flats for rent or sale to find your ideal living space.',
  },
];


