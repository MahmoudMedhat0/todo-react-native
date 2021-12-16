import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox";
import { styles } from "./todoItemStyles";

export default function TodoItem({
  title,
  tag,
  completed,
  onPress,
  onChecked,
}) {
  return (
    <View style={styles.todoItemContainer}>
      <Checkbox checked={completed} onPress={onChecked} />
      <TouchableOpacity style={styles.todoItemContent} onPress={onPress}>
        <Text  numberOfLines={1} style={styles.todoItemTitle}>{title}</Text>
        <View>
          <Text  numberOfLines={1} style={styles.todoItemTag}>{tag}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
