import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import AccountListItem from '../components/AccountListItem';
import AccountList from '../components/AccountList';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import database,{accounts} from '../db';
import Account from '../model/Account';

export default function AccountsScreen() {
    const [name, setName] = useState('');
    const [cap, setCap] = useState('');
    const [tap, setTap] = useState('');


    const createAccount = () => {
        console.warn('create account, ', name);
        
    }

    const onRead = async () =>{
        const accountsCollection = database.get<Account>('accounts');
        const accounts = await accountsCollection.query().fetch();
        console.log(accounts);
        
        
        await database.write(async () => {
            accountsCollection.create((account) =>{
                account.name = 'test';
                account.cap = 10.5;
                account.tap = 20.1; 
            })
        })
    } 

  return (
    <View style={{gap: 5, padding: 5,}}>
      <Text>Account</Text>
        <View style={styles.header}>
            <Text>Name</Text>
            <Text>Cap</Text>
            <Text>Tap</Text>
        </View>

    <AccountList/>

        <View style={styles.inputRow}>
            <TextInput 
                value = {name} 
                onChangeText={setName}
                placeholder="Name" 
                style={styles.input}/>

            <TextInput 
                value = {cap} 
                onChangeText={setCap}
                placeholder="Cap %" 
                style={styles.input}/>

            <TextInput 
                value = {tap} 
                onChangeText={setTap}
                placeholder="Tap %" 
                style={styles.input}/>

            <Entypo name="check" size={20} color="green" />
        </View>



    <Button title='Add Account' onPress={createAccount}/>
        <Button title='Read' onPress={onRead}/>

    </View>
  );
}


const styles = StyleSheet.create({
    header:{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:10,
        
        
    },

    inputRow:{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:10,
    },

    input:{
        flex:1, 
    }
});
