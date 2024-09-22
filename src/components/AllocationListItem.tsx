import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Allocation from '../model/Allocation'

const AllocationListItem = ({ allocation}:  { allocation: Allocation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{allocation.createdAt.toLocaleDateString()}</Text>
            <Text style={styles.income}>{allocation.income}000VND</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // flexDirection:'row',
        // justifyContent:'center'
        borderRadius: 10,
        overflow:'hidden'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#A3B18A',
        padding: 10,
    },
    income:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3A5A40'
    },
})

export default AllocationListItem;