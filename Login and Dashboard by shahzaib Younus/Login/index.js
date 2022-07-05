// Importing required libraries(there is another JS file for Styling)
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator,Linking } from 'react-native'
import React, { Component, useState, useEffect, Alert } from 'react';
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';

const Login = () => {

// setting states to save variables
    const navigation = useNavigation()
    const [Loading, setLoading] = useState(false)
    const [statusLogin, setStatusLogin] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [inputPass, setInputPass] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [isValidPass, setIsValidPass] = useState(true);
    const [Visibility, setVisibility] = useState('');

    // Secure Token
    const [token, setToken] = useState('zasdcvgtghnkiuhgfde345tewasdfghjkm');

    // calling and posting API data, where the confidential token is passed through a stored value
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "email=" + inputUser + "&password=" + inputPass + '&device_token=' + token
    };
    const getLoginStatus = () => {
        setLoading(true)
        fetch('http://buddy.ropstambpo.com/api/login', requestOptions)
            .then((response) => response.json()).then((resJson) => {
                console.log('=========resJson===========', JSON.stringify(resJson.meta.message))

                // Calling Function that will check response and will store values
                verifyLoginData(resJson)

                // controlling Activity Indicator
                if (resJson.meta.message == "Successfull") {
                    null
                }
                else {
                    setLoading(true)
                    startLoading()
                }

            }).catch((error) => {
                console.error(error);
            });
    }

    // checking Login Response and displaying text if something wents wrong
    const verifyLoginData = (resJson) => {

        if (resJson.meta.message == "Successfull") {
            console.log('Everything is fine')
            navigation.replace('Dashboard')
            AsyncStorage.setItem('islogin', JSON.stringify(true))
            setLoginFailed(true)
        }
        else {
            setLoading(true)
            setStatusLogin('Login Credentials are Wrong')
            setLoginFailed(false)
            console.log('Login Credentials are Wrong')
        }
    }

    // Input Forma (userEmail and Password) Validation
    const validatePasswordandUserName = () => {
        if (inputUser.length == 0) {

            setVisibility('User field is Empty');
            console.log('User field is Empty')
            setIsValidPass(false);
            return false;
        }
        else if (inputPass.length == 0) {

            setVisibility('Password field is Empty');
            console.log('Password field is Empty')
            setIsValidPass(false);
            return false;
        }
        else {
            getLoginStatus()
            console.log('Correct Valdation')
            setIsValidPass(true);
        }
    };


    // Activity Indicator will be stopped after a second if user putted wrong credentials
    const startLoading = () => {
        console.log('Inside Loading')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    // Alert when user will click on Recovery Password
    const createTwoButtonAlert = () => {
        alert('Recovery Password Selected');
    }

    // main return function for displaying all values
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Some circle images for catchy design */}
                <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse65.png')} style={styles.circle65}>
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse57.png')} style={styles.circle57} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse59.png')} style={styles.circle59} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse56.png')} style={styles.circle56} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse58.png')} style={styles.circle58} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse64.png')} style={styles.circle64} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse63.png')} style={styles.circle63} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse61.png')} style={styles.circle61} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse60.png')} style={styles.circle60} />
                    <ImageBackground source={require('../../Theme/Images/Bubbles/Ellipse62.png')} style={styles.circle62} />
                </ImageBackground>

                <View style={styles.ImageContainer}>
                    <Text style={styles.swimmingText}>Hello Again!</Text>
                    <Text style={styles.LogoText}>Chance to get your {'\n'} life better</Text>
                </View>

                {/* UserInputs of Login Screen -->> */}

                <View style={styles.BodySection}>
                    <View style={styles.TextInputSection}>
                        <View style={styles.TextInputField}>
                            <TextInput
                                placeholder="Enter email"
                                placeholderTextColor='white'
                                style={styles.PlaceholderStyling}
                                onChangeText={(ref) => {
                                    setInputUser(ref);
                                    console.log(ref)
                                }
                                }
                            />
                        </View>
                        <View style={styles.TextInputField}>
                            <TextInput
                                placeholder="Password"
                                secureTextEntry
                                placeholderTextColor='white'
                                style={styles.PlaceholderStyling}
                                onChangeText={(ref) => {
                                    setInputPass(ref);
                                }
                                }
                            />
                        </View>

                        {/* It will show alert */}
                        <TouchableOpacity style={styles.ForgotPasswordSection}
                            onPress={createTwoButtonAlert}
                        >
                            <Text style={styles.ForgotPasswordText}>Recovery password</Text>
                        </TouchableOpacity>

                        {/* Activity indicator will run untill result is not fetched */}
                        {!Loading ?
                            (
                                <View style={styles.ButtonSection}>
                                    <TouchableOpacity style={styles.ButtonComponentStyling}

                                        onPress={() => {
                                            validatePasswordandUserName()
                                        }

                                        }
                                    >
                                        <Text style={styles.ButtonText}>LOGIN</Text>
                                    </TouchableOpacity>

                                </View>
                            )
                            :
                            (
                                <ActivityIndicator
                                    size={'large'} color="white" style={{ margin: '5%' }} >
                                </ActivityIndicator>
                            )
                            }
                        <View style={styles.orLogInWith}>
                            <Text style={{ color: 'black' }}>
                                or login with
                            </Text>
                        
                            <View style={styles.logosView}>
                                {/* facebook page of RopStam Solutions */}
                                <TouchableOpacity style={styles.facebookTouch} onPress={()=>{Linking.openURL('https://www.facebook.com/Ropstam/')}}>
                                    <Entypo name="facebook" size={47} color='blue' style={styles.facebooklogo} />
                                </TouchableOpacity>

                                {/* user can login through appleId */}
                                <TouchableOpacity onPress={()=>{Linking.openURL('https://appleid.apple.com/')}}>
                                    <AntDesign name="apple1" size={30} color='black' style={styles.appleLogo} />
                                </TouchableOpacity>

                                {/* google link of ropstam solutions */}
                                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.ropstam.com/' )}}>
                                    <AntDesign name="google" size={47} color='#e49f3a' style={styles.googleLogo} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/* It will display textual content of input Form Validation */}
                        {!isValidPass ?
                            (
                                <View style={styles.invalidPassView}>
                                    <Text style={styles.invalidPassText}>
                                        {Visibility}
                                    </Text>
                                </View>
                            ) :
                            (
                                 null
                            )
                        }
                        {!loginFailed ?
                            (
                                <View style={styles.invalidPassView}>
                                    <Text style={styles.invalidPassText}>
                                        {statusLogin}
                                    </Text>
                                </View>
                            )
                            :
                            (
                                null
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Login;