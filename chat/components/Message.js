import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './Styles'
export default class Message extends Component {
  render() {
    return (
      <Text style={styles.message}>{this.props.text}</Text>
    );
  }
}

