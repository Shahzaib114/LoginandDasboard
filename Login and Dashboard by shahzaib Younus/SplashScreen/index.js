// Importing required libraries(there is another JS file for Styling)
import React, { useState } from 'react'
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native'
import styles from './style'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();


    // it will redirect user after 3 second, to login or dashboard screen according to Login or Logout functionalities
    setTimeout(async() => {            
            let response = await AsyncStorage.getItem('islogin')
            console.log('loginvalue', response)
            if(response=='true')
            {
                console.log("dashboard")
                navigation.replace('Dashboard')
            }
            else
            {
                console.log("login")
                navigation.replace('Login')
            }
        
    }, 3000);
    
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ImageContainer}>
                    <Text style={styles.swimmingText}>Hellow</Text>
                    <View style={styles.lineView}>
                        <View style={styles.lineStyle} />
                        <View style={styles.lineStyle} />
                    </View>
                    <Text style={styles.LogoText}>RopStam Solutions</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default Splash