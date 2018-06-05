import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';
import SocketIOClient from 'socket.io-client';
import Header from './components/Header';
import Messages from './components/Messages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://10.0.2.2:5000');
    this.socket.on('recieveMessage', (message) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    });

    this.state = {
      messages: [],
      senderName: '',
      message: ''
    }

    // this.socket = SocketIOClient('http://localhost:8080');

    this.sendMessage = this.sendMessage.bind(this);
    
  }
  sendMessage() {
    this.socket.emit('sendMessage', {message: `${this.state.senderName}: ${this.state.message}`})
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Messages messages={this.state.messages}/>
        </ScrollView>
        <TextInput placeholder="Имя"
          onChangeText={(senderName) => {this.setState({senderName})}}
        />
        <TextInput placeholder="Сообщение"
          onChangeText={(message) => {this.setState({message})}}
        />
        <Button 
          onPress={this.sendMessage}
          title="Отправить Сообщение"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  },
});
