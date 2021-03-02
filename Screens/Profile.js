import React, { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { StyleService, useStyleSheet } from "@ui-kitten/components";
import { Avatar, Divider, Text } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
const Profile = ({ navigation, user, profile }) => {
  useEffect(() => {
    user;
  }, []);

  console.log(user);

  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.containerProfile}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: wp("10%"),
          paddingTop: wp("10%"),
        }}
      >
        <Avatar
          style={styles.avatarProfile}
          source={require("../assets/img/rich-froning.jpg")}
        />
      </View>
      <View>
        <View style={styles.containerProfileText}>
          <View style={styles.leftTextProfile}>
            <Text category="s2">Nombre</Text>
          </View>
          <View style={styles.rightTextProfile}>
            <Text>Rich Froning</Text>
          </View>
        </View>
        <Divider />

        <View style={styles.containerProfileText}>
          <View style={styles.leftTextProfile}>
            <Text category="s2">Género</Text>
          </View>

          <View style={styles.rightTextProfile}>
            <Text>Hombre</Text>
          </View>
        </View>
        <Divider />

        <View style={styles.containerProfileText}>
          <View style={styles.leftTextProfile}>
            <Text category="s2">Edad</Text>
          </View>

          <View style={styles.rightTextProfile}>
            <Text>34</Text>
          </View>
        </View>
        <Divider />
      </View>
      <View style={{ paddingTop: wp("10%") }}>
        <View style={styles.containerProfileText}>
          <View style={styles.leftTextProfile}>
            <Text category="s2">Email</Text>
          </View>

          <View style={styles.rightTextProfile}>
            <Text>{user.user.email}</Text>
          </View>
        </View>
        <Divider />

        <View style={styles.containerProfileText}>
          <View style={styles.leftTextProfile}>
            <Text category="s2">Celular</Text>
          </View>

          <View style={styles.rightTextProfile}>
            <Text>332434567</Text>
          </View>
        </View>

        <Divider />
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  containerProfile: {
    flex: 1,
    backgroundColor: "background-basic-color",
  },
  avatarProfile: {
    width: wp("35%"),
    height: hp("20%"),
  },
  containerProfileText: {
    display: "flex",
    flexDirection: "row",
    height: hp("6%"),
    alignItems: "center",
    backgroundColor: "#2E3A59",
  },
  leftTextProfile: {
    width: wp("50%"),
    paddingRight: wp("5%"),
    paddingLeft: wp("5%"),
  },
  rightTextProfile: {
    paddingLeft: wp("5%"),
    display: "flex",
    alignContent: "flex-end",
  },
});

const mapStateToProps = (state) => ({
  user: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(Profile);
