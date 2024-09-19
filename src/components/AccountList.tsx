import { FlatList } from "react-native";
import AccountListItem from "./AccountListItem";
import { useEffect, useState } from "react";
import { accountsCollection } from "../db";

export default function AccountList(){

    const [accounts, setAccounts] = useState([]);


    useEffect(() =>{
        const fetchAccounts = async () =>{
            const accounts = await accountsCollection.query().fetch();
            setAccounts(accounts);
        }
        fetchAccounts();
    }, [])

    console.log(accounts);
    console.log("hello");


    return(
        <FlatList 
            data={accounts}
            contentContainerStyle={{gap: 5, }}
            renderItem={() => <AccountListItem/>}
        />
    );
}