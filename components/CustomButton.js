import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./CustomButtonStyles";

export default function CustomButton({ danger, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.customButtonContainer,
        { backgroundColor: danger ? "#e53d3d" : "#3F4EA0" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.customContainerTitle} onPress={onPress}>
        {danger ? "Cancel" : "Confirm"}
      </Text>
    </TouchableOpacity>
  );
}
