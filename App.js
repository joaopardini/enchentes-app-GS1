import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MonitoramentoScreen from './screens/MonitoramentoScreen';
import AlertaScreen from './screens/AlertaScreen';
import ControleScreen from './screens/ControleScreen';
import HistoricoScreen from './screens/HistoricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Monitoramento" component={MonitoramentoScreen} />
        <Stack.Screen name="Alertas" component={AlertaScreen} />
        <Stack.Screen name="Controle" component={ControleScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}