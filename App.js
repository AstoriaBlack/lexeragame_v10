import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"

// Import screens
import HomeScreen from "./src/screens/HomeScreen"
import SpellingGameScreen from "./src/screens/SpellingGameScreen"
import InitializeDbScreen from "./src/screens/InitializeDbScreen"

const Stack = createNativeStackNavigator()

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }

  async loadFonts() {
    await Font.loadAsync({
      OpenDyslexic: require("./assets/fonts/OpenDyslexic-Regular.otf"),
      "OpenDyslexic-Bold": require("./assets/fonts/OpenDyslexic-Bold.otf"),
    })
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this.loadFonts()
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />
    }

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lexera Life" }} />
            <Stack.Screen name="SpellingGame" component={SpellingGameScreen} options={{ title: "Spelling Game" }} />
            <Stack.Screen name="InitializeDb" component={InitializeDbScreen} options={{ title: "Database Setup" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

