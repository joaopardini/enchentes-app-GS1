import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

export default function MonitoramentoScreen() {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
    api.get('/sensores')
      .then(response => setSensores(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Sensores</Text>
      <FlatList
        data={sensores}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sensor}>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Localização: {item.localizacao}</Text>
            <Text>Valor: {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  sensor: { padding: 10, marginBottom: 10, backgroundColor: '#e0e0e0', borderRadius: 8 }
});