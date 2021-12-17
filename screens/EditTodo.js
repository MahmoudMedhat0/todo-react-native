import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import { editTodo } from "../stores/todoSlice";
import { styles } from "./AddTodoStyles";

export default function EditTodo({ route, navigation }) {
  const { title, id, tag, completed } = route.params;
  const [newtitle, onChangeTitle] = useState(title);
  const [newtag, onChangeTag] = useState(tag);
  const [titleblure, onChangeTitleblure] = useState(true);
  const [tagblure, onChangeTagblure] = useState(true);
  const dispatch = useDispatch();
  const onEdit = (data) => {
    dispatch(editTodo(data));
  };
  return (
    <View style={styles.container}>
      <View style={styles.addTodoContainer}>
        <Text style={styles.addTodoLabel}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={newtitle}
          placeholder="Please Enter Todo Title."
          onBlur={() => onChangeTitleblure(false)}
        />
        {!newtitle && !titleblure && (
          <Text style={{ color: "#e53d3d" }}>* this field is required</Text>
        )}
        <Text style={styles.addTodoLabel}>Tag</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTag}
          value={newtag}
          placeholder="Please Enter Todo Tag."
          onBlur={() => onChangeTagblure(false)}
        />
        {!newtag && !tagblure && (
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
              onEdit({
                id: id,
                title: newtitle,
                tag: newtag,
                completed: completed,
              }),
                onChangeTag(""),
                onChangeTitle("");
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </View>
  );
}
