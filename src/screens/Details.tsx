import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { AdMobBanner } from 'expo-ads-admob'
import { globalStyles } from "../../assets/styles/global"
import { DetailsFirst } from "../components/Details__First"
import { DetailsSecond } from "../components/Details__Second"


interface DitailsProps {
  route: any;
}
export const Details: React.FC<DitailsProps> = ({ route }) => {
  let bannerError = (e:any) =>{
    console.log('Banner error '+e)
  }
  return (
    <View>
        <SafeAreaView>
          <ScrollView style={[styles.container, globalStyles.bgMain]}>
            {/* Header */}
            <View>
              <DetailsFirst data={route.params} />
              <AdMobBanner
                adUnitID="ca-app-pub-3307342027640793/5937521802" 
                servePersonalizedAds={false}
                onDidFailToReceiveAdWithError={(e)=>bannerError(e)} />
              <DetailsSecond data={route.params} />
              <AdMobBanner
                adUnitID="ca-app-pub-3307342027640793/5937521802" 
                servePersonalizedAds={false}
                onDidFailToReceiveAdWithError={(e)=>bannerError(e)} />
            </View>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },

});
