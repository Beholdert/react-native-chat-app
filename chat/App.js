import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import Header from './components/Header';
import Message from './components/Message';
import Styles from './components/Styles';

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
    Keyboard.dismiss();
    this.setState({message: ''});
    this.socket.emit('sendMessage', {message: `${this.state.senderName}: ${this.state.message}`})
  }
  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
      >
        <Header />
        <ScrollView 
          style={Styles.messages}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={() => {        
            this.scrollView.scrollToEnd({animated: true});
        }}
        >
          {this.state.messages.map((message, index) => <Message text={message} key={index}/>)}
        </ScrollView>
        <View style={Styles.form}>
        <TextInput style={Styles.input} placeholder="Имя"
          onChangeText={(senderName) => {this.setState({senderName})}}
        />
        <TextInput style={Styles.input} placeholder="Сообщение"
          value={this.state.message}
          onChangeText={(message) => {this.setState({message})}}
        />
        <Button 
          onPress={this.sendMessage}
          title="Отправить"
        />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
