import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import { addTodo } from "../stores/todoSlice";
import { styles } from "./AddTodoStyles";
export default function AddTodo({navigation}) {
  const [title, onChangeTitle] = useState("");
  const [tag, onChangeTag] = useState("");
  const [titleblure, onChangeTitleblure] = useState(true);
  const [tagblure, onChangeTagblure] = useState(true);
  const dispatch = useDispatch({ navigation });
  const onAdd = (data) => {
    dispatch(addTodo(data));
  };
  return (
    <View style={styles.addTodoContainer}>
      <Text style={styles.addTodoLabel}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Please Enter Todo Title."
        onBlur={() => onChangeTitleblure(false)}
      />
      {!title && !titleblure && (
        <Text style={{ color: "#e53d3d" }}>* this field is required</Text>
      )}
      <Text style={styles.addTodoLabel}>Tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTag}
        value={tag}
        placeholder="Please Enter Todo Tag."
        onBlur={() => onChangeTagblure(false)}
      />
      {!tag && !tagblure && (
        <Text style={{ color: "#e53d3d" }}>* this field is required</Text>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 24,
        }}
      >
        <CustomButton danger onPress={() => navigation.navigate("Home")} />
        <CustomButton
          onPress={() => {
            onAdd({
              id: Date.now(),
              title: title,
              tag: tag,
              completed: false,
            }),
              onChangeTag(""),
              onChangeTitle("");
          }}
        />
      </View>
    </View>
  );
}
