import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {  Icon, Text } from "@ui-kitten/components";

import { StyleSheet } from "react-native";

const DrawerMenu = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.menuContainer}>
        <View style={styles.iconoContainer}>
          <Icon style={styles.icon} filled="#8F9BB3" name={props.iconName} />
        </View>
        <View style={styles.tituloContainer}>
          <Text >{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginVertical: 15,
  },
  iconoContainer: {
    flex: 1.5,
    justifyContent: "center",
  },
  tituloContainer: {
    flex: 8.5,
    justifyContent: "center",
  },
});

export default DrawerMenu;
