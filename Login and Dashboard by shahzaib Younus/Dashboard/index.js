// Importing required libraries(there is another JS file for Styling)
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Dashboard = () => {
    // setting states to save variables
    const navigation = useNavigation()
    const [data, setData] = useState();
    const [quest, setquest] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    // Calling useEffect to fetch dashboard data
    useEffect(() => {
        getDashboardData()
    }, []);

    // Function to fetch dashboard details
    const getDashboardData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/Posts');
            const json = await response.json();
            console.log('data is:', json[0].title)
            setIsLoading(true)
            setData(json)
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    // main return function for displaying all values
    return (
        <View style={styles.container}>
            <ScrollView>

                {/* user cam logout by pressing this button */}
                <TouchableOpacity style={style.logouttext}
                    onPress={() => { AsyncStorage.setItem('islogin', JSON.stringify(false)), navigation.replace('Login') }}>
                    <Text >
                        Logout
                    </Text>
                </TouchableOpacity>

                {/* Activity indicator will run untill data fetched from API */}
                {!isLoading ?
                    (
                        <ActivityIndicator size={'large'} color="white">

                        </ActivityIndicator>
                    )
                    :
                    (
                        // Flatlist to show data in a list View
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={style.mainView}>
                                    <View style={style.doubletext}>
                                        <Text>
                                            Id Here is: {item.id}
                                        </Text>
                                        <Text style={style.titleText}>Title is: {item.title}</Text>
                                    </View>
                                    <Text style={style.bodystyle}>
                                        Finally Body Message is{"\n"} {item.body}
                                    </Text>
                                </View>
                            )}
                        />
                    )
                }
            </ScrollView>
        </View>
    )
}
export default Dashboard;