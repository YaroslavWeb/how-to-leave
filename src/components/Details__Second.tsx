import React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { ICountry } from "../interfaces";
import { globalStyles } from "../../assets/styles/global";

interface DetailsSecondProps {
  data: ICountry;
}

export const DetailsSecond: React.FC<DetailsSecondProps> = ({ data }) => {
  return (
    <View style={globalStyles.p5px}>
      <View style={[styles.section, globalStyles.borderIntroLeft]}>
        <Text
          style={[
            styles.title,
            globalStyles.textLarge,
            globalStyles.textLight,
            globalStyles.textColor,
            globalStyles.borderIntroBottom,
          ]}
        >
          О стране
        </Text>
        <View>
          <Text style={[globalStyles.textLight, globalStyles.p5px, globalStyles.textSmall]}>{data.intro}</Text>
        </View>
      </View>
      <View style={[styles.section, globalStyles.borderVisaLeft]}>
        <Text
          style={[
            styles.title,
            globalStyles.textLarge,
            globalStyles.textLight,
            globalStyles.textColor,
            globalStyles.borderVisaBottom,
          ]}
        >
          Виза
        </Text>
        <View style={globalStyles.p5px}>
          <Text style={[globalStyles.textLight, globalStyles.textSmall]}>{data.aboutVisa}</Text>
          {data.tableVisa.length != 0 
          ? data.tableVisa.map((item, index)=>{
          return <View style={styles.visaItem} key={"visa_"+index}>
              <Text style={[globalStyles.textLight, globalStyles.textSmall]}>{item}</Text>
            </View>
          })
          : false}
        </View>
      </View>
      <View style={[styles.section, globalStyles.borderWorkLeft]}>
        <Text
          style={[
            styles.title,
            globalStyles.textLarge,
            globalStyles.textLight,
            globalStyles.textColor,
            globalStyles.borderWorkBottom,
          ]}
        >
          Работа
        </Text>
        <View>
          <Text style={[globalStyles.textLight, globalStyles.p5px, globalStyles.textSmall]}>{data.aboutWork}</Text>
          <Text style={[globalStyles.textLight, globalStyles.textBig]}>
            Поиск вакансий:
          </Text>
          {data.linkWork.map((item, index) => {
            return (
              <View key={"link_" + index}>
                <Text
                  style={[
                    globalStyles.textRegular,
                    globalStyles.textLink,
                    globalStyles.textMedium, 
                    globalStyles.p5px
                  ]}
                  onPress={() => {
                    Linking.openURL(item);
                  }}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={[styles.section, globalStyles.borderFactsLeft]}>
        <Text
          style={[
            styles.title,
            globalStyles.textLarge,
            globalStyles.textLight,
            globalStyles.textColor,
            globalStyles.borderFactsBottom,
          ]}
        >
          Интересные факты
        </Text>
        <View style={globalStyles.p5px}>
          {data.facts.map((item, index) => {
            return (
              <Text key={"fact_" + index} style={[globalStyles.textLight, globalStyles.textSmall, styles.fact]}>
                {index+1}. {item}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {},
  title: {},
  visaItem:{
    backgroundColor:"#C2ACFF",
    marginBottom:5,
    padding:5,
    borderRadius:5
  },
  fact:{
    backgroundColor:"#A6D5FF",
    marginBottom:5,
    padding:5,
    borderRadius:5
  }
});
