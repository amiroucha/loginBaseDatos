import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
    contenedor:{
        backgroundColor: Colors.blueDark,

    },
    inputLogin:{
        backgroundColor: Colors.grey,
        color: Colors.black,
        padding: 10,
        borderRadius:30,
        width: '90%',
        alignSelf: 'center',
    },
    tituloLogin:{
        fontSize: 30,
        color: Colors.black,
        backgroundColor: Colors.blueLight,

    },


})