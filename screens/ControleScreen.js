import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function ControleScreen() {
  const [acao, setAcao] = useState(null);

  const ativarBarreira = () => {
    api.post('/controle/barreira')
      .then(response => setAcao(response.data))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle da Barreira</Text>
      <Button title="Ativar Barreira" onPress={ativarBarreira} />
      {acao && (
        <View style={styles.acao}>
          <Text>Ação: {acao.acao}</Text>
          <Text>Data: {acao.dataHora}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  acao: { marginTop: 20, padding: 10, backgroundColor: '#c0f0c0', borderRadius: 8 }
});