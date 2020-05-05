import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../assets/styles/global";
import { ICountry } from "../interfaces";
import { getFlags } from "../../assets/assets";
import { useNavigation } from "@react-navigation/native";
interface CardProps {
  country: ICountry;
}

export const Card: React.FC<CardProps> = ({ country }) => {
  const navigation = useNavigation();
  const getStatusCard = (status: number) => {
    if (status == 0) return globalStyles.bgGreen;
    else if (status == 1) return globalStyles.bgOrange;
    else return globalStyles.bgRed;
  };

  return (
      <View style={[styles.card, globalStyles.shadow, getStatusCard(country.status)]}>
        <View style={[globalStyles.row, styles.sectionFirst]}>
          <Image style={styles.flag} source={getFlags[country.code]} />
          <View>
            <Text
              style={[
                globalStyles.textLight,
                globalStyles.textColor,
                globalStyles.textBig,
                globalStyles.pl5px,
              ]}
            >
              {country.name}
            </Text>
            <View style={styles.line}></View>
            <View style={globalStyles.pl5px}>
              {country.tags.map((tag, index) => (
                <View
                  style={[globalStyles.row, styles.tags]}
                  key={"tag_" + index}
                >
                  <Image
                    style={styles.check}
                    source={require("../../assets/images/check.png")}
                  />
                  <Text
                    style={[
                      globalStyles.textRegular,
                      globalStyles.textColor,
                      globalStyles.textSmall,
                      globalStyles.pl5px,
                    ]}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={[globalStyles.row, styles.sectionSecond]}>
          <View style={styles.statusSection}>
            <Text
              style={[
                globalStyles.textColor,
                globalStyles.textLight,
                globalStyles.textBig,
                globalStyles.textCenter
              ]}
            >
              {country.status == 0
                ? "Easy leave"
                : country.status == 1
                ? "Medium leave"
                : "Hard leave"}
            </Text>
            <Text
              style={[
                globalStyles.textCenter,
                globalStyles.textMedium,
                globalStyles.textLight,
                globalStyles.textColor,
              ]}
            >
              {country.minPrice}к-{country.maxPrice}к руб
            </Text>
          </View>
          <TouchableOpacity onPress={() => {navigation.navigate('Details', country)}}>
            <Text
              style={[
                styles.moreBtn,
                globalStyles.textMedium,
                globalStyles.textColor,
                globalStyles.textRegular,
              ]}
            >
              Подробнее
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    minHeight: 150,
    marginVertical: "2%",
    marginHorizontal: "2%",
    padding: 5,
  },
  sectionFirst: {
    minHeight: 80,
  },
  sectionSecond: {
    padding: 3,
    minHeight: 75,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  flag: {
    borderWidth: 2,
    borderColor: "#192D2B",
    resizeMode:'stretch',
    maxWidth:155,
    maxHeight:95
  },
  statusSection:{
    width:155
  },
  line: {
    width: 150,
    borderBottomColor: "#192D2B",
    borderBottomWidth: 1,
  },
  tags: {
    padding: 1,
    alignItems: "center",
  },
  check: {
    width: 15,
    height: 15,
  },
  moreBtn: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#192D2B",
    padding: 4,
  },
});
