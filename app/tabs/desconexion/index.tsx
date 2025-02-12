import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react';
import Boton from '../../../components/Boton';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { auth } from '@/Firebaseconfig';


const ScreenConfiguracion = () => {
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={GlobalStyles.contenedor}>
        <Text style={GlobalStyles.tituloDescone}>Desconectarse</Text>
        <Pressable style={GlobalStyles.boton} onPress={() => auth.signOut()}>
            <Text style={GlobalStyles.boton}>Cerrar sesión</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}

export default ScreenConfiguracion