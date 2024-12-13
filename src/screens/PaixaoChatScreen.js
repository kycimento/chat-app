// src/screens/PaixaoChatScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando Ionicons para usar a seta

const PaixaoChatScreen = () => {
  const [message, setMessage] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleMessage = (answer, question) => {
    setMessage(answer);
    setSelectedQuestion(question); // Registra a pergunta selecionada
  };

  const resetQuestions = () => {
    setMessage('');
    setSelectedQuestion(null); // Reseta a pergunta selecionada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat com Paixão</Text>

      {selectedQuestion === null ? (
        <View style={styles.questionContainer}>
          <TouchableOpacity
            style={styles.questionButton}
            onPress={() =>
              handleMessage("A tecnologia é como uma obra de arte em constante evolução. Cada código que escrevo me faz sentir como se estivesse criando algo único!", "coding")
            }
          >
            <Text style={styles.buttonText}>O que você acha do processo de codificação?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.questionButton}
            onPress={() =>
              handleMessage("Eu adoro como a tecnologia pode aproximar as pessoas. Nada melhor do que um bom código para conectar mentes criativas pelo mundo todo!", "connection")
            }
          >
            <Text style={styles.buttonText}>Qual o poder da tecnologia em conectar as pessoas?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.questionButton}
            onPress={() =>
              handleMessage("Acredito que cada desafio é uma oportunidade para aprender e crescer. Cada erro me ensina algo novo, e isso é muito empolgante!", "learning")
            }
          >
            <Text style={styles.buttonText}>Como você lida com os desafios na tecnologia?</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{message}</Text>
          <TouchableOpacity style={styles.backButton} onPress={resetQuestions}>
            {/* Ícone de seta dentro de um TouchableOpacity sem texto adicional */}
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FF69B4', // Rosa choque
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    fontFamily: 'Arial', // Fonte agradável e legível
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%',
  },
  questionButton: {
    marginBottom: 15, // Agora com espaçamento visível entre as perguntas
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15, // Bordas arredondadas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4', // Rosa choque
    textAlign: 'center',
  },
  answerContainer: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15, // Bordas arredondadas para o contêiner da resposta
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  answer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#FF69B4', // Rosa choque
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaixaoChatScreen;
