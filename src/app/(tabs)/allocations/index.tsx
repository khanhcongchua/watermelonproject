import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
// import Allocation from '../../model/Allocation';
import AllocationsList from '../../../components/AllocationsList';
import {Feather} from '@expo/vector-icons';
import { useEffect } from 'react';
import { mySync } from '../../../db/sync';
// import { accountAllocationColection } from '../../db';
export default function HomeScreen() {

  

  return (
    <View style={styles.container}>
      <Stack.Screen options={
        {
          title: 'Allocations',
          headerRight: () => (
            <Feather 
              name="refresh-cw" 
              size={24} 
              color="green" 
              onPress={mySync}
            />
        ),
        }
      }
        
      />

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
