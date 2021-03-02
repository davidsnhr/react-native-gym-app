import React from "react";
import {
  Button,
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Avatar } from "@ui-kitten/components";
const DrawerUpperButton = ({ navigation }) => {
  return (
    <View style={styles.drawerUpperButton}>
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <Avatar
          source={require("../../assets/img/rich-froning.jpg")}
          size="small"
          color="#fff"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerUpperButton: {
    paddingLeft: wp("3%")
  },
});

export default DrawerUpperButton;
