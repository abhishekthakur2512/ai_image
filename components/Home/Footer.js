import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.appVersion}>Version 1.0.0</Text>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => console.log('Privacy Policy pressed')}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>•</Text>
          <TouchableOpacity onPress={() => console.log('Terms of Service pressed')}>
            <Text style={styles.link}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>© 2024 Celebrity Image App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  footerContent: {
    alignItems: 'center',
  },
  appVersion: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 8,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  link: {
    fontSize: 12,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  separator: {
    fontSize: 12,
    color: '#6c757d',
    marginHorizontal: 8,
  },
  copyright: {
    fontSize: 10,
    color: '#6c757d',
    textAlign: 'center',
  },
}); 