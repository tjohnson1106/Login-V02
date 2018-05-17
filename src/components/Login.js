import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text
} from "react-native";

import { LinearGradient } from "expo";

import LoginForm from "./LoginForm";

class Login extends Component {
  state = {};
  render() {
    return (
      <LinearGradient
        colors={["#decba4", "#3e5151", "#6080B2"]}
        start={[0.4, 0.8]}
        end={[0.1, 0.4]}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo_login_one.jpeg")}
            style={styles.logo}
          />
        </View>

        <LoginForm />
      </LinearGradient>
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
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 0.5,
    borderColor: "#000112"
  }
});

export default Login;

{
  /* <ImageBackground
source={require("../../assets/login_one.jpeg")}
style={styles.container}
> */
}

// </ImageBackground>
