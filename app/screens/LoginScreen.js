import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';

function LoginScreen(props) {

    return (
        <Screen style={styles.continuer}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.jpg')}/>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={null} // Add your validation schema here
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            onChangeText={handleChange('email')}
                            placeholder="Email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                        <AppButton
                            title="Register"
                            onPress={() => console.log("Register pressed")}
                            color="secondary"
                        />
                    </>
                )}
            </Formik>
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