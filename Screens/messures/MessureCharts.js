import React from "react";
import { View } from "react-native";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment";

import { StyleService, Text, useStyleSheet, Button, Card  } from "@ui-kitten/components";

const MessureCharts = () => {
  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
  ];
  const styles = useStyleSheet(themedStyles);
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View style={styles.container}>
      <Card
        style={{
          backgroundColor: "#222222",
          width: wp("85%"),
          maxHeight: hp("35%"),
        }}
      >
        <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
        >
          <Grid />
        </AreaChart>
      </Card>
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
export default MessureCharts;
