import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
  },
  title: {
    fontSize: 30,
    color: '#74b9ff',
    textAlign: 'center',
  },
  viewTextInput: {
    flex: 1,
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#74b9ff'
  },
  btnForm: {
    width: 50,
    margin: 1,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#74b9ff",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    width: 200
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  viewBtn: {
    alignItems: 'center',
    alignContent: 'center'
  }
});