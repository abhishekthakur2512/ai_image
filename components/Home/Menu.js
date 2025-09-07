import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu() {
  const handleActionPress = (action) => {
    console.log(`${action} pressed!`);
  };

  return (
    <View style={styles.infoSection}>
      <Text style={styles.infoTitle}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => handleActionPress('Take Photo')}
        >
          <Text style={styles.actionEmoji}>📸</Text>
          <Text style={styles.actionText}>Take Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => handleActionPress('Gallery')}
        >
          <Text style={styles.actionEmoji}>🖼️</Text>
          <Text style={styles.actionText}>Gallery</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => handleActionPress('Favorites')}
        >
          <Text style={styles.actionEmoji}>⭐</Text>
          <Text style={styles.actionText}>Favorites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionCard}
          onPress={() => handleActionPress('Settings')}
        >
          <Text style={styles.actionEmoji}>⚙️</Text>
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2c3e50',
    textAlign: 'center',
  },
}); 