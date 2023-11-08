import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // useEffect is being called on different lifecycle

  const handleFetchData = () => {
    console.log('fetching data')
    
    fetch('https://localhost:8080')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

  }
  return (
    <View style={styles.container}>
      <Text>Hey Class</Text>
      <StatusBar style="auto" />
      <Button title='get some data' onPress={(handleFetchData) => console.log('test')}/>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
})
