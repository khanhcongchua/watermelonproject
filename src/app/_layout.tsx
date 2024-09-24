import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'
import AuthProvider, {useAuth} from '../providers/AuthProvider'

const RootLayout = () => {

    // const {isAuthenticated } = useAuth();

    // if(!isAuthenticated){
    //     return <Redirect href={'/login'} />;
    // }

    // return <Slot />;

    return(<AuthProvider>
            <Slot />
        </AuthProvider>);
    
            
        
};


// const RootLayoutWithProvider = () => {
//     return (
//         <AuthProvider>
//             <RootLayout/>
//         </AuthProvider>
//     );
// }

export default RootLayout;