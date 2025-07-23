import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import { jwtDecode } from "jwt-decode";

// Validation schema can be defined here if needed
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    console.log(result.data);
  };
  return (
    <Screen style={styles.continuer}>
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} // Add your validation schema here
      >
        <ErrorMessage
          error="Invalid email or password."
          visible={loginFailed}
        />
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  continuer: {
    marginTop: 20,
    width: "100%",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 40,
  },
});

export default LoginScreen;
