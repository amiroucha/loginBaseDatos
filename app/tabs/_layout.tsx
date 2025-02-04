import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="baseDatos/index"
        options={{
          title:'Informacion',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="grid-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="desconexion/index"
        options={{
          title: 'Sign out',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="log-out-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
