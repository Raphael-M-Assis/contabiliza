import Toast from "react-native-toast-message";

export const showToast = (
  type: "success" | "error" | "info",
  titulo: string,
  subtitulo: string
) => {
  Toast.show({
    type: type,
    text1: titulo,
    visibilityTime: 3000,
    text2: subtitulo,
    text1Style: {
      fontFamily: "Poppins_400Regular",
      fontSize: 16,
    },
    text2Style: {
      fontSize: 15,
      fontFamily: "Poppins_400Regular",
    },
  });
};
