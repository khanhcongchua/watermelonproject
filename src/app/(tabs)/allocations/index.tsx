import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Link, Stack } from 'expo-router';
// import Allocation from '../../model/Allocation';
import AllocationsList from '../../../components/AllocationsList';
import {Feather} from '@expo/vector-icons';
import { useEffect } from 'react';
import { mySync } from '../../../db/sync';
import { supabase } from '../../../lib/supabase';
import * as Crypto from 'expo-crypto';
import { useRouter } from 'expo-router';
import { router } from 'expo-router';


// import { accountAllocationColection } from '../../db';
export default function HomeScreen() {

  const test = async() =>{
    const res  = await supabase.rpc('create_account', {
      _id: Crypto.randomUUID(), 
      _user_id: Crypto.randomUUID(),
      _name: 'Example Name', 
      _cap: 1000,
      _tap: 500,
      _create_at: new Date().toISOString(),
      _updated_at: new Date().toISOString(),
    });
    console.log(res);
  }

  // Đồng bộ dữ liệu khi màn hình được load
  useEffect(() => {
    const syncData = async () => {
      try {
        await mySync();  // Gọi hàm đồng bộ khi màn hình này load
      } catch (error) {
        console.log('Error syncing data: ', error);
      }
    };

    syncData();  // Gọi hàm sync ngay khi component được render lần đầu
  }, []);  // Mảng rỗng để chỉ chạy khi component mount lần đầu



  return (
    <View style={styles.container}>
      <Stack.Screen options={{
          title: 'Allocations',
          headerRight: () => (
            <Feather 
              name="refresh-cw" 
              size={24} 
              color="green" 
              onPress={mySync}
            />
          ),
        }}
    />
    {/* <Button title='Test' onPress={test}/> */}

      {/* <Link href="/allocations/new" asChild>
        <Text style={styles.button}>New Allocation</Text>
      </Link> */}


      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => router.push('/allocations/new')}
      >
        <Feather name="plus" size={28} color="#fff" />
      </TouchableOpacity>

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
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    zIndex: 10, 
  },
});


