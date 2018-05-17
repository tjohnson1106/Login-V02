import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#242321"
        />

        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#242321"
        />

        <TouchableOpacity style={styles.registerButton}>
          <Text>Sign In With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetButton}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LoginFormContainer: {
    alignItems: "center"
  },
  input: {
    color: "#7F93B2",
    alignSelf: "stretch",
    padding: 12,
    marginBottom: 10,
    backgroundColor: "rgba( 255, 255, 255, 0.2 )",
    borderColor: "#000112",
    borderWidth: 0.6,
    borderRadius: 20
  },
  loginButton: {
    backgroundColor: "#ecf0f1",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 14,
    marginTop: 10
  },
  registerButton: {
    backgroundColor: "#D13B6B",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 14,
    marginTop: 10,
    borderRadius: 20,
    borderColor: "#000112"
  },
  forgetButton: {
    backgroundColor: "#CAF0D8",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 14,
    marginTop: 10,
    borderRadius: 20,
    borderColor: "#000112"
  }
});

export default LoginForm;
