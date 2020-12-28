import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import NavBar from './views/NavBar';
import CardProfiles from './views/CardProfiles';
import ChoiceButtons from './views/ChoiceButtons';

export default function App() {
  const swipeCardRef = useRef(null);

  return (
    <View style={styles.container}>
      <NavBar />
      <CardProfiles ref={swipeCardRef} style={{ flex: 1}} />
      <ChoiceButtons ref={swipeCardRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
