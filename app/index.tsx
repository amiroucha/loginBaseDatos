import { GlobalStyles } from '@/theme/GlobalStyles';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import Boton from '../components/Boton';


const login = () => {
    return (
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
            <Boton label='Acceder' link='../drawer'></Boton>
            <Boton label='Registrarte' link='../drawer'></Boton>
        </View>
      </View>
  
    )
  }
  
  export default login