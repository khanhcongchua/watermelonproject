import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import database, { allocationsCollection } from '../../db';

export default function NewAllocationScreen() {
  const [income, setIncome] = useState('');

  const save = async () => {
    await database.write(async () => {
      allocationsCollection.create((newAllocation) =>{
        newAllocation.income = Number.parseFloat(income);
      });
    });
  };


  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'New Allocations'}}/>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Income</Text>
          <TextInput value={income}
            onChangeText={setIncome}
            placeholder="$123"
            style={styles.input}
          />
      </View>


      <Button title='save' onPress={save}/>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding:10,
    gap:10,
  },

  inputRow:{
    
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },

  label:{
    
    fontWeight:'bold',
    width:100,
  },
  input:{
    backgroundColor: 'white',
    padding:10,
    borderRadius: 5,
    flex:1,
  },

});