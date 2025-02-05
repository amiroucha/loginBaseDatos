import { GlobalStyles } from '@/theme/GlobalStyles';
import { View, Text, TextInput, Image, Pressable, ScrollView  } from 'react-native';
import Boton from '../components/Boton';
import { Alert } from "react-native";


const login = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={GlobalStyles.contenedor}>

        
          <Text style={GlobalStyles.tituloLogin}>LOGIN</Text>
          <Image 
            source={require("../assets/images/user.png")}
            style={GlobalStyles.LoginImg}
          ></Image>
          <TextInput style={GlobalStyles.inputLogin} 
          placeholder="Usuario"></TextInput>

          <TextInput style={GlobalStyles.inputLogin} 
          placeholder="Contraseña" secureTextEntry={true} ></TextInput>


          <View style={{display:'flex',flexDirection: 'row', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
            <Pressable onPress= {()=>{
              Alert.alert('En proceso de registro')}}>
                <Text style={GlobalStyles.enlaceRegistro}>Regístrate aquí</Text>
            </Pressable>

            <Boton label='Acceder' link='../tabs'></Boton>
          </View>
        </View>




      </ScrollView>
      
  
    )
  }
  export default login