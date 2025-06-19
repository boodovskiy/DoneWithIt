import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppFormField from '../components/AppFormField';

// Validation schema can be defined here if needed
const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
});

function LoginScreen(props) {

    return (
        <Screen style={styles.continuer}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo.jpg')}/>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema} // Add your validation schema here
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppFormField
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            placeholder="Email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
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