import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CreateUserScreen from "../screens/CreateUserScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import UsersListScreen from "../screens/UsersListScreen";

const Stack = createNativeStackNavigator();

const IndexApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={CreateUserScreen} />
        <Stack.Screen name="Detail" component={UserDetailScreen} />
        <Stack.Screen name="List" component={UsersListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexApp;
