import React from 'react'
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
import EmptyAvisos from './components/EmptyAvisos';
const Avisos = () => {
    const styles = useStyleSheet(themedStyles);
    return (
        <View style={styles.container}>
            <EmptyAvisos />  
            <Text>No hay avisos</Text>
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

export default Avisos