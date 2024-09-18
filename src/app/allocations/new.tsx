import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NewAllocationScreen() {
  return (
    <View >
      <Stack.Screen options={{title:'New Allocations'}}/>

      <Text>New Allocation</Text>
    </View>
  );
}

