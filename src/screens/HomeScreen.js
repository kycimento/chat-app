import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Com quem você deseja conversar?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RenanChat')} // Navegação para a tela do chat do Renan
      >
        <Ionicons name="flame" size={50} color="white" />
        <Text style={styles.buttonText}>Renan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PaixaoChat')} // Navegação para a tela do chat da Paixão
      >
        <FontAwesome name="heart" size={50} color="white" />
        <Text style={styles.buttonText}>Paixão</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B5E2', // Azul piscina
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    fontFamily: 'Arial',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BFFF', // Azul celeste
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'Arial',
  },
});

export default HomeScreen;
