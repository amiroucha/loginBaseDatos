import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
    contenedor:{
        backgroundColor: Colors.blueDark,
        alignItems: 'center',
        flex:1,
    },
    inputLogin:{
        backgroundColor: Colors.grey,
        color: Colors.black,
        padding: 10,
        borderRadius:30,
        width: '90%',
        fontSize: 20,
        margin: 10,
        borderWidth:2,
        borderColor: Colors.white,
    },
    tituloLogin:{
        fontSize: 60,
        color: Colors.blueLight,
        fontWeight: 'bold',
        marginTop: 30,
    },
    boton:{
        width: 'auto',
        height: 45,
        textAlign: 'center',
        padding: 5,
        fontSize: 21,
        borderRadius: 30,
        backgroundColor: Colors.blueLight,
        fontWeight:'black',
        marginRight: 20,
        borderColor: Colors.black,
        borderWidth: 2,
    },
    LoginImg:{
        width: 150,
        height: 150,
        margin: 20,
    },
    enlaceRegistro:{
        padding: 10,
        fontSize: 21,
        textDecorationLine: 'underline',
        color: Colors.blueLight,
        marginLeft: 20,
    },
    tituloDescone:{
        fontSize: 40,
        color: Colors.blueLight,
        fontWeight: 'bold',
        marginTop: 30,

    },
    info:{
        fontSize: 30,
        color: Colors.blueLight,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign:'center',
    },

})