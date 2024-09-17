import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: 250,
  },
  containerTitle: {
    position: "relative",
    display: "flex",
    backgroundColor: "#175560",
    padding: 20,
    height: 110,
  },
  title: {
    fontSize: 20,
    marginTop: 33,
    color: "#FFFFFF",
  },
  pickerContainer: {
    position: "absolute",
    marginHorizontal: 2,
    padding: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    top: 100,
    width: "100%",
    backgroundColor: "#39b496",
    height: 60,
  },
  arrowButton: {
    display: "flex",
    backgroundColor: "#2be0b7",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  period: {
    fontSize: 17,
  },
});
