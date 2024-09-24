import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Allocation from '../model/Allocation'
import numeral from 'numeral'
import { withObservables } from '@nozbe/watermelondb/react';
import { accountAllocationColection } from '../db';
import AccountAllocation from '../model/AccountAllocation';
import AccountAllocationItem from './AccountAllocationItem';

type AllocationListItem ={
    allocation: Allocation;
    accountAllocations: AccountAllocation[];
};


const AllocationListItem = ({ 
    allocation,
    accountAllocations,
}: AllocationListItem) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{allocation.createdAt.toLocaleDateString()}</Text>
            <Text style={styles.income}>{numeral(allocation.income).format('0,0')},000vnd</Text>
            {/* <Text>{accountAllocations.length}</Text> */}
        </View>


        <View style={{gap: 5, padding: 5, }}>
            {accountAllocations.map((item) => (
                <AccountAllocationItem key={item.id} accountAllocation={item}/>
            ))}
        </View>
    </View>
  );
};

const enhance  = withObservables(['allocation'], 
    ({allocation} : {allocation: Allocation}) => ({
    allocation,
    accountAllocations: allocation.accountAllocations
}));


export default enhance(AllocationListItem);




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

