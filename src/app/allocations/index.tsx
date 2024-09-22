import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Allocation from '../../model/Allocation';
import AllocationsList from '../../components/AllocationsList';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alloctions</Text>

      <Link href="/allocations/new" asChild>
        <Text style={styles.button}>New Allocation</Text>
      </Link>

      <AllocationsList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  button: {
    backgroundColor: '#354f52',
    color:'#ff8fab',
    margin: 10,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    borderRadius: 5,
    overflow: 'hidden',

  },  
});
