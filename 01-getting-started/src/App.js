//import logo from './logo.svg';
//import './App.css';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native'
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!! </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles=StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor : "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//export default App;
