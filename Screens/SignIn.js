import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { ScreenContainer } from "react-native-screens";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Input, Layout, Icon, Button, Spinner } from "@ui-kitten/components";

const SignIn = ({ login, isAuthenticated, navigation, auth: { loading, auth, user } }) => {
  const [email, setEmail] = useState([{ email: "" }]);
  const [password, setPassword] = useState([{ password: "" }]);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigation.navigate("RootStackScreen");
  };
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="small" />
    </View>
  );
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View
          style={{
            width: wp("100%"),
            paddingBottom: wp("10%"),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 360, height: 190 }}
            source={require("../assets/img/harder_logo.png")}
          />
        </View>
        <View style={{ paddingBottom: wp("20%") }}>
          <View style={{ width: wp("80%"), paddingTop: 10, paddingBottom: 10 }}>
            <Input
              placeholder="Email"
              label="E-mail"
              value={email}
              keyboardType="email-address"
              autoCapitalize = 'none'
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ width: wp("80%"), paddingTop: 10, paddingBottom: 30 }}>
            <Input
              value={password}
              label="Contraseña"
              placeholder="Contraseña"
              autoCapitalize = 'none'
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {!loading ? (
            <View >
              <Button size="medium" style={{}} onPress={(e) => onSubmit(e)}>
                Iniciar Sesión
              </Button>
            </View>
          ) : (
            <Button appearance="outline" accessoryLeft={LoadingIndicator}>
              Iniciar Sesión
            </Button>
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222B46",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  logoLogin: {
    width: wp("100%"),
    height: hp("20%"),
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(mapStateToProps, { login })(SignIn);
