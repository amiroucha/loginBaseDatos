import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import Boton from '../../../components/Boton';
import { GlobalStyles } from '@/theme/GlobalStyles';


const ScreenConfiguracion = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={GlobalStyles.contenedor}>
        <Text style={GlobalStyles.tituloDescone}>Desconectarse</Text>
        <Boton label='Sign out' link='../../'></Boton>
      </View>
    </ScrollView>
  )
}

export default ScreenConfiguracion