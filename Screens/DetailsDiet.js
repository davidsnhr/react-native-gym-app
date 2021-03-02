import React from "react";
import { View } from "react-native";
import {
  StyleService,
  Text,
  useStyleSheet,
  Button,
  Card,
} from "@ui-kitten/components";
import moment from "moment";
import 'moment/locale/es-mx';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native-gesture-handler";
const DetailsDiet = ({ route }) => {
  const { date, meals } = route.params;
  console.log("dieta seleccionada", date);
  console.log("dieta seleccionada", meals);
  const styles = useStyleSheet(themedStyles);

  const renderItem = (item) => (
    //console.log('item', item.meal.map((data) => data.element))
    <View style={{ paddingLeft: wp("3%"), paddingRight: wp("5%") }}>
      <Card
        style={{
          backgroundColor: "#222222",
          width: wp("85%"),
          height: hp("75%"),
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <View>
            <Text>70.2gr</Text>
            <Text category="s2" style={{ color: "#18CCF9" }}>
              Carbs
            </Text>
          </View>
          <View>
            <Text>14.1gr</Text>
            <Text category="s2" style={{ color: "#FF5E7B" }}>
              Grasa
            </Text>
          </View>
          <View>
            <Text>19.6gr</Text>
            <Text category="s2" style={{ color: "#68ED50" }}>
              Proteina
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingLeft: wp("28%"),
            paddingTop: wp("2%"),
            paddingBottom: wp("3%"),
          }}
        >
          <Text category="h1" style={{ color: "#F8CA0B" }}>
            471
          </Text>
          <Text>Calorias</Text>
        </View>
        <View>
          <Text category='h6' style={{paddingBottom: 3}}>Ingredientes</Text>
          {item.meal.map((data, index) => (
            <View key={index}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                }}
              >
                <Text category='p1'>{data.quantity}</Text>
                <Text category='p1'>{data.mesure}  </Text>
                <Text category='p1'>{data.element}</Text>
              </View>
            </View>
          ))}
          <Text category='h6'>Indicaciones</Text>
          {item.meal.map((data)=> data.recipe && <Text>{data.recipe}</Text>)}
        </View>
      </Card>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: wp("3%"), display: 'flex', alignContent:'center', justifyContent: 'center' }}>
        <Text category="h2" style={{ color: "#F8CA0B" }}>
          {moment().format("dddd").toUpperCase()}
        </Text>
        <Text>{moment().format("LL")}</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={meals}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(meal) => meal._id}
        horizontal
        pagingEnabled
      />
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
export default DetailsDiet;
