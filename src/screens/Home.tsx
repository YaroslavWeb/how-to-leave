import React from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import Data from "../../assets/storage/countries.json";
import { ICountry, IFilter } from "../interfaces";
import { globalStyles } from "../../assets/styles/global";
import { HeaderHome } from "../components/HeaderHome";
import { Card } from "../components/Card";

interface HomeProps {
  navigation: any;
}

const winHeight = Dimensions.get("window").height;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [countries, setCountries] = React.useState<ICountry[]>(
    Data.sort((a, b) => a.status - b.status)
  );

  const [filters, setFilters] = React.useState<IFilter[]>([
    { id: "1", status: "Easy", active: true },
    { id: "2", status: "Medium", active: true },
    { id: "3", status: "Hard", active: true },
  ]);

  React.useEffect(() => {
    setCountries((prev) =>
      prev.map((item) => {
        for (let index = 0; index < filters.length; index++) {
          if (item.status == index) item.show = filters[index].active;
        }
        return item;
      })
    );
  }, [filters]);

  const toggleFilter = (id: string) => {
    let counter: number = 0;
    setFilters((prev) => {
      prev.map((item) => {
        item.active ? counter++ : counter;
      });
      return prev.map((item) => {
        if (item.id === id && (counter > 1 || !item.active))
          item.active = !item.active;
        return item;
      });
    });
  };

  return (
    <View style={globalStyles.bgMain}>
      <FlatList
        ListHeaderComponent={
          <HeaderHome filters={filters} toggleFilter={toggleFilter} />
        }
        ListHeaderComponentStyle={styles.header}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => "country_" + item.id}
        data={countries}
        renderItem={({ item }) => {
          if (item.show) {
            return <Card country={item} navigation={navigation} />;
          } else return null;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: winHeight * 0.14,
    width: "100%",
    backgroundColor: "#FF8D27",
    flexDirection: "row",
    alignItems: "flex-end",
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
