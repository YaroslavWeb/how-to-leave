import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import { IFilter } from "../interfaces";

const winWidth = Dimensions.get("window").width;

interface HeaderHomeProps {
  filters: IFilter[];
  toggleFilter: (tag: string) => void;
}

export const HeaderHome: React.FC<HeaderHomeProps> = ({ filters, toggleFilter }) => {
  const getTagBG = (status: string) => {
    if (status == "Easy") return globalStyles.bgGreen;
    if (status == "Medium") return globalStyles.bgOrange;
    return globalStyles.bgRed;
  };
  return (
    <>
      <View style={styles.list}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={"tag_" + index}
            onPress={toggleFilter.bind(null, filter.id)}
          >
            <Text
              style={[
                styles.tag,
                globalStyles.shadow,
                globalStyles.textLight,
                globalStyles.textMedium,
                globalStyles.textCenter,
                globalStyles.textColor,
                filter.active ? getTagBG(filter.status) : globalStyles.bgDisabled,
              ]}
            >
              {filter.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <View style={styles.action}>
        <TouchableOpacity>
          <Image
            style={styles.work}
            source={require("../../assets/images/tie.png")}
          />
        </TouchableOpacity>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:winWidth*1,
    padding:10
  },
  // action: {
  //   width: "15%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  tag: {
    borderRadius: 10,
    width:winWidth*0.3,
    padding: 8,
  },
  // work: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 10,
  // },
});
