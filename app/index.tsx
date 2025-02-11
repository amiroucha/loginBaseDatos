import { GlobalStyles } from '@/theme/GlobalStyles';
import { View, Text, TextInput, Image, Pressable, ScrollView  } from 'react-native';
import { Alert } from "react-native";
import { useState } from "react";
import { router} from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/Firebaseconfig';
import Boton from '../components/Boton';



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
          <Text style={GlobalStyles.tituloLogin}> Iniciar Sesion</Text>
          
          <TextInput style={GlobalStyles.inputLogin} 
          placeholder="email"  value={email} onChangeText={setEmail} />
          
          <TextInput style={GlobalStyles.inputLogin} 
          placeholder='contraseña' value={password} onChangeText={setPassword}
            secureTextEntry />
          

          <View style={GlobalStyles.contenedorRegistroAcceder}>

            <Pressable onPress={()=>{router.push('./(tabs)/bbdd')}}>
              <Text style={GlobalStyles.registrar} onPress={register}>Regístrate aquí</Text>
            </Pressable>

            <Boton label='Acceder' link='./tabs/baseDatos' onPress={logIn}></Boton>
            
          </View>

        </View>
        
      ); 
  }
  export default login