import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../assets/styles/global";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

interface HeaderDetailsProps {}

export const HeaderDetails: React.FC<HeaderDetailsProps> = () => {
  const MyRef =  React.createRef<ScrollView>();

  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.list}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.btnBack}
            source={require("../../assets/images/back.png")}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=> scrollTo}>
          <Text
            style={[
              styles.anchor,
              globalStyles.textCenter,
              globalStyles.textLight,
              globalStyles.textCenter,
              globalStyles.textMedium,
              globalStyles.bgVisa,
            ]}
          >
            Виза
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={[
              styles.anchor,
              globalStyles.textCenter,
              globalStyles.textLight,
              globalStyles.textCenter,
              globalStyles.textMedium,
              globalStyles.bgWork,
            ]}
          >
            Работа
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={[
              styles.anchor,
              globalStyles.textCenter,
              globalStyles.textLight,
              globalStyles.textCenter,
              globalStyles.textMedium,
              globalStyles.bgFacts,
            ]}
          >
            Факты
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: winHeight * 0.14,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FF8D27",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  list: {
    flexDirection: "row",
    // justifyContent: "space-between",
    width: winWidth * 1,
    padding: 10,
  },
  btnBack: {
    borderRadius: 10,
    width: 50,
    height: 40,
  },
  anchor: {
    borderRadius: 10,
    width: winWidth * 0.25,
    padding: 8,
  },
});
