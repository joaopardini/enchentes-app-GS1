import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

export default function HistoricoScreen() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    api.get('/controle/historico')
      .then(response => setHistorico(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Ações</Text>
      <FlatList
        data={historico}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Ação: {item.acao}</Text>
            <Text>Data: {item.dataHora}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 10, marginBottom: 10, backgroundColor: '#e0e0e0', borderRadius: 8 }
});