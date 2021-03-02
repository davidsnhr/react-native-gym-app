import React, { useEffect } from "react";
import { View } from "react-native";
import { Button } from "@ui-kitten/components";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { connect } from "react-redux";
import {getProfileById} from "../actions/profile";

const Home = ({ user, getProfileById }) => {

  useEffect(() => {
    user && getProfileById(user._id)
  }, [user]);
  console.log('usuario home', user);

  const getProfile = () => {
    console.log('get profile')
    getProfileById(user._id)
  }

  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button size="medium" onPress={(e) => getProfile(e)}>
        Hola mundo
      </Button>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background-basic-color",
  },
});
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps , {getProfileById})(Home);
