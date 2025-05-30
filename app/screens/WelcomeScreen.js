import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >   
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.jpg')} style={styles.logo}/> 
                <Text style={styles.logoSlogan}>Sell What You Don't Need.</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        borderRadius: 35,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logoSlogan: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
        borderRadius: 35,
    },
})

export default WelcomeScreen;