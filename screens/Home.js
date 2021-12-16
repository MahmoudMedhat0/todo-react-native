import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { editTodo, getTodos } from "../stores/todoSlice";
import EditTodo from "./EditTodo";

import Addbtn from "../components/Addbtn";
export default function Home({ navigation }) {
  // TODO : pass id from componant
  

  const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    //add logic to filter data to update tags by userId
    const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getTodos());
    // }, [dispatch]);
    return (
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View
              style={[styles.separator, highlighted && { marginLeft: 0 }]}
            />
          ))
        }
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Text style={{ color: "#fff" }}>{item.title}</Text>
              <Text style={{ color: "#fff" }}>{item.tag}</Text>
            </>
          );
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Addbtn onPress={() => navigation.navigate("Add")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141419",
  },
  input: {
    width: "100%",
    height: 40,
    marginVertical: 16,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#444141",
    borderColor: "#040405",
    color: "#fff",
  },
});
