import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/router/navigation";
import Tabs from "./src/router/bottomBarNavigaton";

const App = () => {
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;