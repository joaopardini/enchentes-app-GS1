import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function AlertaScreen() {
  const [alerta, setAlerta] = useState(null);

  const gerarAlerta = () => {
    api.post('/alertas/gerar')
      .then(response => setAlerta(response.data))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerar Alerta</Text>
      <Button title="Gerar Alerta" onPress={gerarAlerta} />
      {alerta && (
        <View style={styles.alerta}>
          <Text>Nível: {alerta.nivel}</Text>
          <Text>Mensagem: {alerta.mensagem}</Text>
          <Text>Data: {alerta.dataHora}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  alerta: { marginTop: 20, padding: 10, backgroundColor: '#f0c0c0', borderRadius: 8 }
});