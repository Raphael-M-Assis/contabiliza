import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
  },
  containerArrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#175560",
    paddingHorizontal: 10,
    paddingVertical: 15,
    height: 120,
  },
  arrowButton: {
    alignItems: "center",
    width: 60,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});
