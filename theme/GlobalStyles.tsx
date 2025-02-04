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
    },
    tituloLogin:{
        fontSize: 60,
        color: Colors.pink,
        fontWeight: 'bold',
        marginTop: 30,
    },
    boton:{
        width: 150,
        height: 60,
        textAlign: 'center',
        padding: 10,
        fontSize: 21,
        borderRadius: 30,
        backgroundColor: Colors.blueLight,
        fontWeight:'bold',
    },
    botonNaranja:
    {
        backgroundColor: Colors.blueLight,
        color:Colors.blueText,
        textAlign:'center',
        padding: 15,
        width:'auto',
        height: 59 ,
    },
    botonGris:
    {
        backgroundColor: Colors.grey,
        color: Colors.white,
        borderBottomColor: Colors.white,
        width:'auto',
        borderWidth: 4,
        height: 59 ,
        textAlign:'center',
        padding: 10,
        margin:10,
        marginBottom:30,
    },
    LoginImg:{
        width: 150,
        height: 150,

    },

})