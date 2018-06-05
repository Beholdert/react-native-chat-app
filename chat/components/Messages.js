import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Message from './Message';
import styles from './Styles';

export default class Messages extends Component {
    render() {
        return (
            <View style={styles.messages}>
                {this.props.messages.map((message, index) => <Message text={message} key={index}/>)}
            </View>
        );
    }
}
