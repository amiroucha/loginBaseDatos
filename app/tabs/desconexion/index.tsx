import { View, Text } from 'react-native'
import React from 'react';
import Boton from '../../../components/Boton';
import { GlobalStyles } from '@/theme/GlobalStyles';


const ScreenConfiguracion = () => {
  return (
    <View style={GlobalStyles.contenedor}>
      <Text style={GlobalStyles.tituloDescone}>Desconectarse</Text>
      <Boton label='Sign out' link='../../'></Boton>
    </View>
  )
}

export default ScreenConfiguracion