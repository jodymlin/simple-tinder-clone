import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 44 : 88,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  icon: {
    width: 30,
    height: 30
  },
  logo: {
    width: '20%',
    height: 40
  }
});

function NavBar() {
  return (<View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.icon}
        source={require('../images/settings-icon.png')}
      />
    </TouchableOpacity>
    <Image
      style={styles.logo}
      source={require('../images/tinder-logo.png')}
    />
    <TouchableOpacity>
      <Image
        style={styles.icon}
        source={require('../images/chat-icon.png')}
      />
    </TouchableOpacity>
  </View>);
}

export default NavBar;
