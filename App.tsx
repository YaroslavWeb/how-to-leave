import React from "react";
import "react-native-gesture-handler";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFonts } from "./assets/assets";
import { Home } from "./src/screens/Home";
import { Details } from "./src/screens/Details";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: 'Подробнее', headerStyle:{backgroundColor:"#FF8D27"} }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
