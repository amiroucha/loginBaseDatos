import { GlobalStyles } from '@/theme/GlobalStyles';
import { View, Text, TextInput, Image, Pressable, ScrollView  } from 'react-native';
import Boton from '../components/Boton';
import { Alert } from "react-native";
import { useState } from "react";
import { router} from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/Firebaseconfig';



const login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
    
      const logIn = async () => {
        try {
          const user = await (signInWithEmailAndPassword(auth,email,password));
          if (user) router.replace('./tabs')
        } catch (error:any) {
          console.log(error);
          Alert.alert("Inicio de sesión incorrecto", "error.message");
        }
      }
    
    
      const register = async () => {
        try {
          const user = await (createUserWithEmailAndPassword(auth,email,password));
          if (user) router.replace('./tabs');
        } catch (error: any) {
          console.log(error);
          Alert.alert("Error al registrar el usuario", error.message);
        }
    
    
      }
    
      return (
        <View style={GlobalStyles.contenedor}>
          <Text style={GlobalStyles.tituloLogin}> Página de login</Text>
          <TextInput style={GlobalStyles.inputLogin} placeholder="email"  value={email} onChangeText={setEmail} />
          <TextInput style={GlobalStyles.inputLogin} placeholder='contraseña' value={password} onChangeText={setPassword}
            secureTextEntry />
          <View style={GlobalStyles.contenedor}>
            <Pressable style={GlobalStyles.boton} onPress={logIn}>
              <Text style={GlobalStyles.boton}>Login</Text>
            </Pressable>
            <Pressable style={GlobalStyles.boton} onPress={register}>
              <Text style={GlobalStyles.boton}>Registrarse</Text>
            </Pressable>
          </View>
    
    
        </View>
      ); 
  }
  export default login