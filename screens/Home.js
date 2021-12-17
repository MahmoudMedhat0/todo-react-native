import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import { toggleTodo, getTodos } from "../stores/todoSlice";
import Addbtn from "../components/Addbtn";

export default function Home({ navigation }) {
  const todos = useSelector((state) => state.todos);
  const newData = todos.map((item, index) => {
    return {
      title: item.title,
      tag:
        item.userId % 5 == 0
          ? "finance"
          : item.userId % 4 == 0
          ? "Freelance"
          : "General",
      id: item.id,
      completed: item.completed,
      // userId:tag
    };
  });

  const completedData = newData.filter((todo) => todo.completed === true);
  const inCompletedData = newData.filter((todo) => todo.completed !== true);

  //add logic to filter data to update tags by userId
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const onChecked = (item) =>{
    dispatch(toggleTodo(item));
  }

  const TodoList = () => {
    return (
      <>
        <View style={{ padding:20,flex:1 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>inCompleted</Text>
          <FlatList
            ItemSeparatorComponent={
              Platform.OS !== "android" &&
              (({ highlighted }) => (
                <View
                  style={[styles.separator, highlighted && { marginLeft: 0 }]}
                />
              ))
            }
            data={inCompletedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TodoItem
                    completed={item.completed}
                    tag={item.tag}
                    key={item.id}
                    title={item.title}
                    onPress={() => navigation.navigate("Edit", item)}
                    // onChecked={onChecked(item)}
                  />
                </>
              );
            }}
          />
        </View>
        <View style={{ width: "90%", height: 3, backgroundColor: "#dadada" }} />
        <View style={{ padding: 20,flex:1 }}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Completed</Text>
          <FlatList
            ItemSeparatorComponent={
              Platform.OS !== "android" &&
              (({ highlighted }) => (
                <View
                  style={[styles.separator, highlighted && { marginLeft: 0 }]}
                />
              ))
            }
            data={completedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <>
                  {/* <Text style={{ color: "#fff" }}>{item.title}</Text>
              <Text style={{ color: "#fff" }}>{item.tag}</Text> */}
                  <TodoItem
                    completed={item.completed}
                    tag={item.tag}
                    key={item.id}
                    title={item.title}
                    onPress={() => navigation.navigate("Edit", item)}
                    // onChecked={onChecked(item)}
                  />
                </>
              );
            }}
          />
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <TodoList />
      <Addbtn onPress={() => navigation.navigate("Add")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,

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
