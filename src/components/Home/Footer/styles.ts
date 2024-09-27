import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
    backgroundColor: "#39b496",
  },
  finantialMovement: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: -30,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#2be0b7",
    width: 60,
    height: 60,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: "100%",
  },
  balanceDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  balanceTextDetails: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },
  expectedBalanceDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  expectedbalanceTextDetails: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 17,
  },
});
