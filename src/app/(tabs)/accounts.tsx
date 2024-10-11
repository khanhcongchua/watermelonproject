// import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
// import AccountListItem from '../../components/AccountListItem';
// import AccountList from '../../components/AccountList';
// import Entypo from '@expo/vector-icons/Entypo';
// import { useState } from 'react';
// import database,{accountsCollection} from '../../db';
// import Account from '../../model/Account';
// import { useAuth } from '../../providers/AuthProvider';

// export default function AccountsScreen() {
//     const [name, setName] = useState('');
//     const [cap, setCap] = useState('');
//     const [tap, setTap] = useState('');

//     const {user} = useAuth();


//     const createAccount = async () => {
//         // console.warn('create account, ', name);

//         await database.write(async () => {
//             await accountsCollection.create((account) =>{
//                 account.name = name;
//                 account.cap = Number.parseFloat(cap);
//                 account.tap = Number.parseFloat(tap); 
//                 account.userId = user?.id;
//             })
//         });

//         setName('');
//         setCap('');
//         setTap('');
        
//     };


//     // const onTest = async () =>{
//     //     await database.write(async () => {
//     //         const accounts = await accountsCollection.query().fetch();
//     //         const account = accounts[0];
//     //         account.update(updateAccount => {
//     //             updateAccount.name = '1234445';
//     //         });
//     //     });
//     // };

    

//   return (
//     <View style={{gap: 5, padding: 5,}}>
//       {/* <Text>Account</Text> */}
//         <View style={styles.header}>
//             <Text>Name</Text>
//             <Text>Cap</Text>
//             <Text>Tap</Text>
//         </View>

//     <AccountList/>

//         <View style={styles.inputRow}>
//             <TextInput 
//                 value = {name} 
//                 onChangeText={setName}
//                 placeholder="Name" 
//                 style={styles.input}/>

//             <TextInput 
//                 value = {cap} 
//                 onChangeText={setCap}
//                 placeholder="Cap %" 
//                 style={styles.input}/>

//             <TextInput 
//                 value = {tap} 
//                 onChangeText={setTap}
//                 placeholder="Tap %" 
//                 style={styles.input}/>

//             <Entypo name="check" size={20} color="green" />
//         </View>



//     <Button title='Add Account' onPress={createAccount}/>
//     {/* <Button title='Test update' onPress={onTest} /> */}

//     </View>
//   );
// }


// const styles = StyleSheet.create({
//     header:{
//         flexDirection:'row', 
//         justifyContent:'space-between',
//         paddingVertical:10,
        
        
//     },

//     inputRow:{
//         flexDirection:'row', 
//         justifyContent:'space-between',
//         paddingVertical:10,
//     },

//     input:{
//         flex:1, 
//     }
// });

import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import AccountList from '../../components/AccountList';
import AccountListItem from '../../components/AccountListItem';
import { useState } from 'react';
import database, { accountsCollection } from '../../db';
import { useAuth } from '../../providers/AuthProvider';

export default function AccountsScreen() {
  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const { user } = useAuth();

  const createAccount = async () => {
    await database.write(async () => {
      await accountsCollection.create((account) => {
        account.name = name;
        account.cap = Number.parseFloat(cap);
        account.tap = Number.parseFloat(tap);
        account.userId = user?.id;
      });
    });
    setName('');
    setCap('');
    setTap('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>CAP</Text>
        <Text style={styles.headerText}>TAP</Text>
      </View>

      <AccountList />

      <View style={styles.inputRow}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={cap}
          onChangeText={setCap}
          placeholder="CAP %"
          style={styles.input}
        />
        <TextInput
          value={tap}
          onChangeText={setTap}
          placeholder="TAP %"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={createAccount}>
        <Text style={styles.buttonText}>Add Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F9FAFB', // Light background for modern look
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F43F5E', // Header background with color matching "Sign In" button
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    color: 'white', // White text for the header
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for a floating input area
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    borderColor: '#D1D5DB', // Light gray border for inputs
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F3F4F6', // Slightly off-white background for inputs
  },
  button: {
    backgroundColor: '#F43F5E', // Same red as "Sign In" button
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for the button
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
