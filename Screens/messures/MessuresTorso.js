import React from "react";
import { View, ScrollView } from "react-native";
import { Grid, LineChart, YAxis } from "react-native-svg-charts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment";

import {
  StyleService,
  Text,
  useStyleSheet,
  Button,
  Card,
  Divider,
  List,
  ListItem,
} from "@ui-kitten/components";

const MessuresTorso = () => {
  const styles = useStyleSheet(themedStyles);
  const dataList = new Array(8).fill({
    right: 12,
    description: moment().format("l"),
    left: 14,
  });

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const contentInset = { top: 20, bottom: 20 };

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`Derecho ${item.right} cm,  Izquierdo ${item.left} cm`}
      description={`${item.description} ${index + 1}`}
    />
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card
          style={{
            backgroundColor: "#222222",
            width: wp("95%"),
            height: hp("30%"),
          }}
        >
          <View style={{ height: 200, flexDirection: "row" }}>
            <YAxis
              data={data}
              contentInset={contentInset}
              svg={{
                fill: "grey",
                fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value}`}
            />
            <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={data}
              svg={{ stroke: "rgba(248, 202, 11)" }}
              contentInset={contentInset}
            >
              <Grid />
            </LineChart>
          </View>
        </Card>
        <View style={{ paddingTop: wp("5%"), width: wp("95%") }}>
          <Text>Biceps</Text>
          <List
            style={{ backgroundColor: "" }}
            data={dataList}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const themedStyles = StyleService.create({
  container: {
    paddingTop: hp('5%'),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background-basic-color",
  },
});
export default MessuresTorso;
