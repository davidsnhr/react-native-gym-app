import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Button, Card } from "@ui-kitten/components";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Octicons";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";

const MyDiet = ({ profile, user, diet, navigation }) => {
  useEffect(() => {
    user;
    diet;
  }, []);
  const styles = useStyleSheet(themedStyles);
  console.log("MyDiet state", user);
  console.log("MyDiet diet", diet);
  return (
    <View style={styles.container}>
      <ScrollView>
      {diet ? (
        diet.map((diet, index) => (
          <View style={{paddingTop: 20}} key={index}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailsDiet', {date: diet.date, meals: diet.meals})}>
              <View style={{ paddingBottom: wp("3%") }}>
                <Card
                  style={{
                    backgroundColor: "#222222",
                    width: wp("85%"),
                    maxHeight: hp("35%"),
                  }}
                >
                  <View>
                    <Text>Fecha de asignación</Text>
                    <Text style={{ paddingBottom: wp("3%") }}>
                      {moment(diet.date).format("LL")}
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Icon name="flame" size={20} color="#FF9142" />
                      <Text style={{ paddingLeft: wp("2%") }}>148 Cal</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableWithoutFeedback>
            
          </View>
        ))
      ) : (
        <Text>No tienes dietas</Text>
      )}
      </ScrollView>
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
  user: state,
  diet: state.profile.profile.diet,
});
export default connect(mapStateToProps)(MyDiet);
