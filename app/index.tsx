import { View, Text, TextInput, Image, Pressable } from 'react-native';


const login = () => {
    return (
      <View style = {GlobalStyles.contenedor}>
        <View style={{height:100, width:'100%' , position:'absolute', top:13}}>
          <Image 
            source={require("../../assets/images/logo_2.png")}
            style={{width: 60, height:60, position:'relative', left:'77%'}}
          ></Image>
        </View>
  
        <Text style={GlobalStyles.tituloLogin}>Bienvenido a </Text>
        <Text style={GlobalStyles.PetConnect}>PetConnect</Text>
  
        <View style={GlobalStyles.fondoBlancoLog}>
          
          <Image 
            source={require("../../assets/images/perroGatoJuntos.png")}
            style={GlobalStyles.perroGato}
          ></Image>
  
          <View style={{ flexDirection: 'column', flexWrap: 'wrap', bottom:50}}>
  
            <Image 
              source={require("../../assets/images/huellaNaranja.png")}
              style={GlobalStyles.pataArriba}
            ></Image>
            <Text style= {GlobalStyles.textoAccede}>Accede al refugio</Text>
            <Image 
              source={require("../../assets/images/huellaNaranja.png")}
              style={GlobalStyles.pataAbajo}
            ></Image>
              
            <TextInput
              style={GlobalStyles.input}
              placeholder="Email"
            />
  
            <TextInput
              style={GlobalStyles.input}
              placeholder="Contraseña"
            />
            <View style={{flexDirection: 'row',flexWrap: 'wrap', width: '100%',  columnGap: 108, alignContent:'center'}}>
              
              <Pressable onPress={()=>{router.push('../signUp')}}>
                  <Text style={GlobalStyles.textRegistrar}>Regístrate aquí</Text>
              </Pressable>
  
              <Boton label='Acceder' backgroundColor='naranja' link='../drawer'></Boton>
            </View>
  
  
          </View>
          
          
    
        </View>
  
        <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
      </View>
  
    )
  }
  
  export default login