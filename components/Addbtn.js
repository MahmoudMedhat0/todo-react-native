import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./AddbtnStyles";

export default function Addbtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.addButtonContainer} onPress={onPress}>
      <Image source={require("../constants/icons/add.png")} />
    </TouchableOpacity>
  );
}
