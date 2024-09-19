import { View, Text,StyleSheet } from "react-native";
import Account from "../model/Account";

type AccountListItem = {
    account: Account;
}

export default function AccountListItem({account}: AccountListItem){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{account.name}</Text>
            <Text style={styles.percentstage}>{account.cap}%</Text>
            <Text style={styles.percentstage}>{account.tap}%</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
    },
    name:{
        fontWeight:'bold',
        fontSize: 16,
        
    },
    percentstage:{}

});