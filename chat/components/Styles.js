import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#42A5F5',
    padding: 50,
    height: 100
  },
  messages: {
    flexWrap: 'nowrap', 
    margin: 20,
    alignItems: 'flex-start',
    height: 400
  },
  message: {
      fontSize: 17,
      paddingBottom: 10,
      color: "#00897B"
  }
});