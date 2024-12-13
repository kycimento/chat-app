import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen({ route }) {
  const { character } = route.params; // Recebe o personagem selecionado
  
  return (
    <View style={styles.container}>
      <Text>{`Você está conversando com ${character}`}</Text>
      {/* Aqui você pode adicionar mais lógica para exibir perguntas e respostas */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
