/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./stores/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./screens/AddTodo";
import EditTodo from "./screens/EditTodo";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={AddTodo} />
          <Stack.Screen name="Edit" component={EditTodo} />
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
};

export default App;
