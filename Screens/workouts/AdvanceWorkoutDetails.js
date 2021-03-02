import React from "react";
import { View, Image } from "react-native";
import {
  StyleService,
  Text,
  useStyleSheet,
  Divider,
  List,
  Avatar,
  ListItem,
} from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const AdvanceWorkoutDetails = ({ route }) => {
  const { data } = route.params;
  console.log("workout selected", data);
  const styles = useStyleSheet(themedStyles);
  const ItemImage = (props, item) => {
    let sourceImage = item.excercise.map(({ image }) => image);
    //return <Avatar style={{width: wp('18%'), height: hp('10%')}} source={{ uri: `${sourceImage}` }} />;
    return (
      <Image
        style={{
          width: wp("25%"),
          height: hp("15%"),
          resizeMode: "contain",
        }}
        source={{ uri: `${sourceImage}` }}
      />
    );
  };

  const descriptionItem = (item) => (
    <View style={{paddingLeft: wp('1%')}} >
        <View>
            <Text category='c1'  status='info' appearance='hint'>{` ${item.comments}`}</Text>
        </View>
        {item.reps.map((data) => (
            <View style={{ display: 'flex', flexDirection: 'row', width: wp('60%') }}>
                 <Text category='c1'  appearance='hint' status='warning' >{` ${data.reps} reps`}</Text>
                 <Text category='c1'  appearance='hint'>{` ${data.instructions}`}</Text>
             </View>
        ))}
    </View>
  )

  const titleItem = (item) => (
    <View style={{ paddingLeft: wp('2%'), height:hp('2%') }}>
        <Text category='c1' status='warning' >{item.excercise.map(({ name }) => name.toUpperCase())} </Text>
    </View>
  )

  const renderItem = ({ item, index }) => (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{ width: wp("5%"), backgroundColor: "#F8CA0B", zIndex: 2 }}
        ></View>
        <View style={{ width: wp("95%") }}>
          <TouchableWithoutFeedback>
            <ListItem
              style={{ height: hp("13%")}}
              title={() => titleItem(item)}
              description={() => descriptionItem(item)}
              accessoryLeft={(props) => ItemImage(props, item)}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.sets.map((set, index) => (
          <View style={{ paddingTop: 10 }} key={index}>
            <List data={set.set} renderItem={renderItem} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color",
  },
});
export default AdvanceWorkoutDetails;

