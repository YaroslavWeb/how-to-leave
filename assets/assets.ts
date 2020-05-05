import * as Font from "expo-font";

export const getFonts = () =>
  Font.loadAsync({
    "manrope-regular": require("./fonts/Manrope-Regular.ttf"),
    "manrope-light"  : require("./fonts/Manrope-Light.ttf"),
    "manrope-bold"   : require("./fonts/Manrope-Bold.ttf"),
  });

export const getFlags: any = {
  ge: require("./images/flags/ge.png"),
  cn: require("./images/flags/cn.png"),
  fi: require("./images/flags/fi.png"),
  ca: require("./images/flags/ca.png"),
  at: require("./images/flags/at.png"),
  no: require("./images/flags/no.png"),
  de: require("./images/flags/de.png"),
  cz: require("./images/flags/cz.png"),
  jp: require("./images/flags/jp.png"),
  sg: require("./images/flags/sg.png"),
  is: require("./images/flags/is.png"),
  us: require("./images/flags/us.png"),
  au: require("./images/flags/au.png"),
  kr: require("./images/flags/kr.png"),
  fr: require("./images/flags/fr.png"),
  ph: require("./images/flags/ph.png"),
  me: require("./images/flags/me.png"),
  cu: require("./images/flags/cu.png"),
  th: require("./images/flags/th.png"),
  vn: require("./images/flags/vn.png"),
  my: require("./images/flags/my.png"),

};
