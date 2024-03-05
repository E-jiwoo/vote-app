import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../components/Login/index";
import Wait from "../../components/Wait/index";
import Vote from "../../components/Vote/index";
//import Modal from "../../components/Modal";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="wait" component={Wait}></Stack.Screen>
        <Stack.Screen name="vote" component={Vote}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
