import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  todoItemContent: { marginLeft: 18 },
  todoItemTitle:{
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: "#DADADA",
  },
  todoItemTag:{
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height, or 133% */

    color: "#575767",
  }
});
