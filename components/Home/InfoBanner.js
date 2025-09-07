import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InfoBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎭 Features</Text>
        <Text style={styles.cardText}>
          This is your home page. You can start building your celebrity image features here.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 