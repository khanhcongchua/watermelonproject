import { Redirect, Slot, Stack, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAuth } from "../../providers/AuthProvider";
export default function TabsLayout(){

    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Redirect href={'/login'}/>;
    }

    

    return(
        <Tabs>
            <Tabs.Screen name="allocations" options={{
                title:'Allocation', 
                headerShown:false,
                tabBarIcon: ({size, color}) =>  (
                    <MaterialIcons 
                        name="account-tree" 
                        size={size} 
                        color="black" />
                ),
                }}
            />


            <Tabs.Screen name="accounts" options={{
                title:'Accounts', 
                // headerShown: false,
                tabBarIcon: ({size, color}) =>  (
                    



                        <MaterialIcons 
                    name="account-box" 
                    size={size} 
                    color={color} 
                    />
                ),
                }}
            />


            {/* <Tabs.Screen name="index" options={{href:null}}/> */}



                
                
        </Tabs>
        
    ) 
    
}