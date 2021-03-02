import React from 'react'
import EmptyData from './components/EmptyData'
import {
    StyleService,
    Text,
    useStyleSheet,
    Button,
    Card,
  } from "@ui-kitten/components";
import {
    View,
  } from "react-native";
const Promotions = () => {
    const styles = useStyleSheet(themedStyles);
    return (
        <View style={styles.container}>
            <EmptyData />  
            <Text>No hay promociones</Text>
        </View>
    )
}

const themedStyles = StyleService.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "background-basic-color",
    },
  });

export default Promotions
