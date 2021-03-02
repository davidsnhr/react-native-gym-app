import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";

const Details = ({ route }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    </ScreenContainer>
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
export default Details;
