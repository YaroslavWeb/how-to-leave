import { StyleSheet } from "react-native";

const COLORS = {
  INTRO:"#89B88D",
  VISA:"#C2ACFF",
  WORK:"#E7596E",
  FACTS:"#A6D5FF"
}
export const globalStyles = StyleSheet.create({
  // Text Syles
  textColor: { color: "#192D2B" },
  textColorSecond: { color: "#FFF" },
  textLink:{color:"#4DB1E7"},

  textRegular: { fontFamily: "manrope-regular" },
  textLight: { fontFamily: "manrope-light" },
  textBold: { fontFamily: "manrope-bold" },

  textTiny: { fontSize: 10 },
  textSmall: { fontSize: 15 },
  textMedium: { fontSize: 18 },
  textBig: { fontSize: 24 },
  textLarge: { fontSize: 32 },

  textCenter: { textAlign: "center" },

  // BG colors
  bgMain: { backgroundColor: "#FCFAFF" },
  bgButton: { backgroundColor: "#192D2B" },
  bgGreen: { backgroundColor: "#8EE596" },
  bgOrange: { backgroundColor: "#FDBA0E" },
  bgRed: { backgroundColor: "#E85A5A" },
  bgDisabled: { backgroundColor: "#D1D1D1" },
  bgIntro:{backgroundColor: COLORS.INTRO},
  bgVisa:{backgroundColor: COLORS.VISA},
  bgWork:{backgroundColor:COLORS.WORK},
  bgFacts:{backgroundColor:COLORS.FACTS},
  // Borders 
  borderIntroLeft:{
    borderLeftColor:COLORS.INTRO,
    borderLeftWidth:3
  },
  borderIntroBottom:{
    borderBottomColor:COLORS.INTRO,
    borderBottomWidth:3
  },
  borderVisaLeft:{
    borderLeftColor:COLORS.VISA,
    borderLeftWidth:3
  },
  borderVisaBottom:{
    borderBottomColor:COLORS.VISA,
    borderBottomWidth:3
  },
  borderWorkLeft:{
    borderLeftColor:COLORS.WORK,
    borderLeftWidth:3
  },
  borderWorkBottom:{
    borderBottomColor:COLORS.WORK,
    borderBottomWidth:3
  },
  borderFactsLeft:{
    borderLeftColor:COLORS.FACTS,
    borderLeftWidth:3
  },
  borderFactsBottom:{
    borderBottomColor:COLORS.FACTS,
    borderBottomWidth:3
  },
  // Direction elements
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },

  // Paddings
  pl5px: { paddingLeft: 5 },
  p5px: {padding:5},

  // Shadows
  shadow: {
    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
    // Android
    elevation: 2,
  },
});
