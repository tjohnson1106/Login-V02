import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image
} from "react-native";

class Login extends Component {
  state = {};
  render() {
    return (
      <ImageBackground
        source={require("../../assets/login_one.jpeg")}
        style={styles.container}
      >
        <View>
          <Image source={require("../../assets/login_logo.jpeg")} />
        </View>
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
    height: 140
  }
});

export default Login;
