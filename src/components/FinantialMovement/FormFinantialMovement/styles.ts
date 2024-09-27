import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: "90%",
  },
  inputDate: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  textDate: {
    textAlign: "center",
    color: "#175560",
    width: "90%",
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 10,
  },
  incomeButton: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  outcomeButton: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  arrowUp: {
    borderColor: "#65d067",
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  arrowDown: {
    borderColor: "#ff0000",
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  repeatContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    width: "90%",
  },
  repeatText: {
    marginTop: 10,
    fontSize: 17,
  },
  repeatNumberContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 10,
    width: "90%",
  },
  choiceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButtonContainer: {
    transform: [{ scale: 1.5 }],
  },
  choiceText: {
    fontSize: 17,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  inputQuantity: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#175560",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 17,
  },
});
