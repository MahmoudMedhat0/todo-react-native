import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {styles} from './CheckboxStyles'

export default function Checkbox({ checked,onPress }) {
  return (
    <TouchableOpacity style={styles.checkBoxContainer} activeOpacity={0.6} onPress={onPress}>
      {checked && (
        <Image
          source={require("../constants/icons/Checkmark.png")}
          style={styles.checkBoxIcon}
        />
      )}
    </TouchableOpacity>
  );
}
