import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image
} from "react-native";

import LoginForm from "./LoginForm";

class Login extends Component {
  state = {};
  render() {
    return (
      <ImageBackground
        source={require("../../assets/login_one.jpeg")}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo_login_one.jpeg")}
            style={styles.logo}
          />
        </View>

        <LoginForm />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    width: null,
    padding: 20
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70
  }
});

export default Login;
