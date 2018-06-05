import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#42A5F5',
    height: 100,
    justifyContent: 'flex-end'
  
  },
  messages: {
    margin: 20
  },
  message: {
      fontSize: 17,
      paddingBottom: 10,
      color: "#00897B",
      backgroundColor: '#fff'
  },
  form: {
    alignItems: "stretch",
    margin: 10,
    padding: 0
  }, 
  input: {
    padding: 10,
    margin: 5,
    fontSize: 20,
    color: '#424242'
  }
});