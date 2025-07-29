import { ActivityIndicator, Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
// Validation schema can be defined here if needed
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  name: Yup.string().required("Name is required"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken); // Assuming authToken contains the token
  };

  return (
    <Screen style={styles.continuer}>
      <ActivityIndicator
        animating={registerApi.loading || loginApi.loading}
        size={"large"}
      />
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} // Add your validation schema here
      >
        <ErrorMessage error={error} visible={!!error} />
        <FormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          textContentType="name"
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
        <SubmitButton title="Register" />
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

export default RegisterScreen;
