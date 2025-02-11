import { View, Text, ScrollView, FlatList, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { db, auth } from '@/Firebaseconfig';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';

const ScreenProductos = () => {
  const user  =  auth.currentUser;
  const coleccionTareas = collection(db,'tareas');
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState<any>([]);

  useEffect(() => {
    cargarDatos();
  },[user]);


  const cargarDatos = async () => {
    if (user) {
      const q = query (coleccionTareas, where("userId", "==", user.uid));
      const datos = await getDocs(q);
      setTareas(datos.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(tareas);
    }
  }
  
  const addTarea = async () => {
    if (user) {
      await addDoc(coleccionTareas, {tarea, userId: user.uid, finalizada: false});
      setTarea('');
      cargarDatos();
    } else {
      console.log("Para añadir una tarea es preciso loguearse primero");
    }
  }

  const borrarTarea = async (id: string) =>{
    const referenciaTarea = doc(coleccionTareas,id);


    await (deleteDoc(referenciaTarea));
    console.log("tarea eliminada:" + referenciaTarea);
    cargarDatos();
  }





  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={GlobalStyles.contenedor}>
          <Text style= {GlobalStyles.info}>Lista tareas</Text>

          <View>

            <TextInput style={[GlobalStyles.inputInformacion,{width:300}]} placeholder="Introduzca una tarea"  value={tarea} onChangeText={setTarea} />
            <Pressable style={GlobalStyles.botonCrear} onPress={addTarea}>
                <Text style={GlobalStyles.texto}>Add</Text>
            </Pressable>
          </View>


          <FlatList data={tareas} style={{width:'100%'}} keyExtractor={(item) => item.id} renderItem={({item}) => {
            return (
              <View>
                <Text>{item.tarea}</Text>
                <Pressable style={[GlobalStyles.botonCrear]} onPress={() => borrarTarea(item.id)}>
                  <Text style={GlobalStyles.texto}>Eliminar</Text>
                </Pressable>
              </View>
          )}} />

      </View>
        
    </ScrollView>
  )
}

export default ScreenProductos