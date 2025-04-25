import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Receitas from './Receita';
import Musicas from './Musica';
import Filmes from './Filme';
import Viagens from './Viagem';

// Criação dos navegadores
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// Componente com as abas no topo
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Receita" // Começa pela aba Receita
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: '#C3C98D' },
        tabBarActiveTintColor: '#000',
        tabBarIndicatorStyle: { backgroundColor: '#000' },
      }}
    >
      <Tab.Screen name="Receita" component={Receitas} />
      <Tab.Screen name="Música" component={Musicas} />
      <Tab.Screen name="Filme" component={Filmes} />
      <Tab.Screen name="Viagem" component={Viagens} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="." component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

