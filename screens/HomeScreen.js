import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enchentes App</Text>
      <Button title="Monitoramento" onPress={() => navigation.navigate('Monitoramento')} />
      <Button title="Alertas" onPress={() => navigation.navigate('Alertas')} />
      <Button title="Controle" onPress={() => navigation.navigate('Controle')} />
      <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});