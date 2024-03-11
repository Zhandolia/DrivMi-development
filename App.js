import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuPage from "./src/pages/MenuPage";
import UserPersonalInfo from "./src/pages/User/UserPersonalInfo";
import UserCarInfo from "./src/pages/User/UserCarInfo";
import UserAdditionalInfo from "./src/pages/User/UserAdditionalInfo";
import UserSecurityInfo from "./src/pages/User/UserSecurityInfo";
import DriverPersonalInfo from "./src/pages/Driver/DriverPersonalInfo";
import DriverLicenseInfo from "./src/pages/Driver/DriverLicenseInfo";
import DriverAdditionalInfo from "./src/pages/Driver/DriverAdditionalInfo";
import DriverSecurityInfo from "./src/pages/Driver/DriverSecurityInfo";
import UserMenu from "./src/pages/User/UserMenu";
import DriverMenu from "./src/pages/Driver/DriverMenu";
import Login from "./src/pages/Login";
import useAuth from "./hooks/useAuth";
import UserAccountInfo from "./src/pages/User/UserAccountInfo";

const Stack = createNativeStackNavigator();

function App() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "white", // Set the background color to white
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login page" }}
        />
        <Stack.Screen
          name="MenuPage"
          component={MenuPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="UserPersonalInfo"
          component={UserPersonalInfo}
          options={{ title: "User Personal Information" }}
        />
        <Stack.Screen
          name="UserCarInfo"
          component={UserCarInfo}
          options={{ title: "User Car Information" }}
        />
        <Stack.Screen
          name="UserAdditionalInfo"
          component={UserAdditionalInfo}
          options={{ title: "User Additional Information" }}
        />
        <Stack.Screen
          name="UserSecurityInfo"
          component={UserSecurityInfo}
          options={{ title: "User Security Info" }}
        />
        <Stack.Screen
          name="DriverPersonalInfo"
          component={DriverPersonalInfo}
          options={{ title: "Driver Personal Info" }}
        />
        <Stack.Screen
          name="DriverLicenseInfo"
          component={DriverLicenseInfo}
          options={{ title: "Driver License Info" }}
        />
        <Stack.Screen
          name="DriverAdditionalInfo"
          component={DriverAdditionalInfo}
          options={{ title: "Driver Additional Info" }}
        />
        <Stack.Screen
          name="DriverSecurityInfo"
          component={DriverSecurityInfo}
          options={{ title: "Driver Security Info" }}
        />
        <Stack.Screen
          name="UserMenu"
          component={UserMenu}
          options={{ title: "User Menu" }}
        />
        <Stack.Screen
          name="DriverMenu"
          component={DriverMenu}
          options={{ title: "Driver Menu" }}
        />
        <Stack.Screen name="UserAccountInfo" component={UserAccountInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
