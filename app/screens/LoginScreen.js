import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Screen style={styles.continuer}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.jpg')}/>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                title="Login"
                onPress={() => console.log("Login pressed")}
            />
            <AppButton
                title="Register"
                onPress={() => console.log("Register pressed")}
                color="secondary"
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    continuer: {
        marginTop: 20,
        width: '100%',
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 40,
    },
})

export default LoginScreen;