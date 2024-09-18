import { Slot, Stack, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function RootLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="allocations" options={{
                title:'Allocation', 
                headerShown:false,
                tabBarIcon: ({size, color}) =>  (
                    <MaterialIcons 
                        name="account-tree" 
                        size={24} 
                        color="black" />
                ),
                }}
            />


            <Tabs.Screen name="accounts" options={{
                title:'Accounts', 
                tabBarIcon: ({size, color}) =>  (
                    



                        <MaterialIcons 
                    name="account-box" 
                    size={size} 
                    color={color} 
                    />
                ),
                }}
            />


            <Tabs.Screen name="index" options={{href:null}}/>



                
                
        </Tabs>
        
    ) 
    
}