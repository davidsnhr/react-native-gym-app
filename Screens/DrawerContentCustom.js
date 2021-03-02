import React, {useEffect} from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import DrawerMenu from "./DrawerMenu";
import { connect } from "react-redux";

const DrawerContentCustom = (props, { user }) => {
  useEffect(() => {
    user;
  }, []);
  return (
    <View>
      <View style={styles.userContainer}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require("../assets/img/rich-froning.jpg")}
        />
        <Text>{user && user.user.email}</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    margin: 8,
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, {})(DrawerContentCustom);
