import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './Header';
import InfoBanner from './InfoBanner';
import Menu from './Menu';
import Footer from './Footer';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <InfoBanner />
        <Menu />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
}); 