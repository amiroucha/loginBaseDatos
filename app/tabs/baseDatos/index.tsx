import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const ScreenProductos = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={GlobalStyles.contenedor}>
        <Text style={GlobalStyles.info}>Datos de la base de datos</Text>
      </View>
    </ScrollView>
  )
}

export default ScreenProductos