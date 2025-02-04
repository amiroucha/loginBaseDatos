import { GlobalStyles } from '@/theme/GlobalStyles';
import { View, Text, TextInput, Image, Pressable } from 'react-native';


const login = () => {
    return (
      <View style={GlobalStyles.contenedor}>

        <Text style={GlobalStyles.tituloLogin}>LOGIN</Text>
        <TextInput style={GlobalStyles.inputLogin} placeholder="Usuario">
            
        </TextInput>
        <TextInput style={GlobalStyles.inputLogin} placeholder="Contraseña" secureTextEntry={true} >
            
        </TextInput>

  
      </View>
  
    )
  }
  
  export default login