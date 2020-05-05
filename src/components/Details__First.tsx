import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { globalStyles } from "../../assets/styles/global";
import { getFlags } from "../../assets/assets";
import { ICountry } from "../interfaces";

const winWidth = Dimensions.get("window").width;


interface DetailsFirstProps {
  data: ICountry;
}

export const DetailsFirst: React.FC<DetailsFirstProps> = ({ data }) => {
  const getStaus = (status: number, min: number, max: number) => {
    if (status == 0) {
      return (
        <View style={[globalStyles.bgGreen, styles.status]}>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textMedium,
            ]}
          >
            Easy leave
          </Text>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textSmall,
            ]}
          >
            {min}к-{max}к руб.
          </Text>
        </View>
      );
    } else if (status == 1) {
      return (
        <View style={[globalStyles.bgOrange, styles.status]}>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textMedium,
            ]}
          >
            Medium leave
          </Text>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textSmall,
            ]}
          >
            {min}к-{max}к руб.
          </Text>
        </View>
      );
    } else {
      return (
        <View style={[globalStyles.bgRed, styles.status]}>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textMedium,
            ]}
          >
            Hard leave
          </Text>
          <Text
            style={[
              globalStyles.textCenter,
              globalStyles.textRegular,
              globalStyles.textSmall,
            ]}
          >
            {min}к-{max}к руб.
          </Text>
        </View>
      );
    }
  };
  return (
    <View style={globalStyles.p5px}>
      <View style={[globalStyles.row]}>
        <View style={styles.leftSide}>
          <Image style={styles.flag} source={getFlags[data.code]} />
        </View>

        <View style={[styles.rightSide, globalStyles.col]}>
          <View style={styles.tagline}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/flag.png")}
            />
            <Text style={[globalStyles.textBig, globalStyles.textLight]}>
              {data.name}
            </Text>
          </View>

          <View style={styles.tagline}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/capital.png")}
            />
            <Text style={[{ fontSize: 20 }, globalStyles.textLight]}>
              {data.capital}
            </Text>
          </View>
          <View style={[styles.tagline]}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/population.png")}
            />
            <Text style={[{ fontSize: 20 }, globalStyles.textLight]}>
              {data.population}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.statusSection, globalStyles.row]}>
        {getStaus(data.status, data.minPrice, data.maxPrice)}
        <View style={[styles.languages]}>
          {data.tags.map((language,index) => {
            return <Text key={'language_'+index} style={[styles.language, globalStyles.textRegular]}>{language} </Text>;
          })}
        </View>
      </View>
      <View style={styles.mapSecion}>
        <MapView
          style={styles.onMap}
          region={{
            latitude: data.coordinate[0],
            longitude: data.coordinate[1],
            latitudeDelta: data.coordinate[2],
            longitudeDelta: data.coordinate[2],
          }}
        >
          <Marker
            coordinate={{
              latitude: data.coordinate[0],
              longitude: data.coordinate[1],
            }}
            title="Привет от разработчика"
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    maxWidth: 155,
    maxHeight: 95,
  },
  rightSide: {
    paddingLeft: 3,
    justifyContent: "space-between",
  },
  flag: {
    borderWidth: 2,
    borderColor: "#192D2B",
    resizeMode: "stretch",
    maxWidth: 155,
    maxHeight: 95,
  },
  statusSection: {
    height: 60,
    marginTop: 4,
  },
  status: {
    borderRadius: 2,
    width: 155,
    justifyContent:'center',
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
  tagline: {
    flexDirection: "row",
    alignItems: "center",
  },
  languages: {
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginLeft:2,
    height: 70,
  },
  language: {
    backgroundColor: "#A8E7DA",
    padding: 3,
    margin:2,
    borderRadius: 2,
    fontSize:15,
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
  icon: {
    borderRadius: 2,
    marginRight: 2,
    width: 28,
    height: 28,
  },
  mapSecion: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#192D2B",
  },
  onMap: {
    width: winWidth * 0.961,
    height: 200,
  },
});
