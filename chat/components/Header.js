import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './Styles.js'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
          <Text style={{color: 'white', fontSize: 40}}>Чат</Text>
      </View>
    );
  }
}
