import {auth} from "@/Firebaseconfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";



export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async () => {
        try{
            const user = await (signInWithEmailAndPassword(auth,email,password))


        }catch (error:any){
            console.log(error)
            Alert.alert("Inicio de sesion incorrecto", "error.message")
        }
    }

    const register = async () => {
        try{
          const user = await (signInWithEmailAndPassword(auth, email,password));
        }catch(error:any){
          console.log(error())
        }
    }

    return(
        <View>

            

        </View>




    )



}