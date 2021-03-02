import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment";
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
import { getWorkouts } from "../../actions/workout";
import { connect } from "react-redux";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import IconsMaterial from "react-native-vector-icons/SimpleLineIcons";

const AdvanceWorkout = ({ getWorkouts, workouts, navigation }) => {
  useEffect(() => {
    getWorkouts();
    workouts;
  }, []);

  const ItemImage = (props, item) => {
    let sourceImage = item.sets.length > 0 && item.sets[0].set[0].excercise[0].image;
    return <Avatar size='large' source={{ uri: `${sourceImage}` }} />;
  };

  const ArrowIcon = (props) => (
    <IconsMaterial name="arrow-right" size={12} color={"#FFFFFF"} />
  );

  const renderItem = ({ item, index }) => (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("AdvanceWorkoutDetails", { data: item })
        }
      >
        <ListItem
          title={`${moment(item.dateOfWorkout).format("dddd")} ${moment(
            item.dateOfWorkout
          ).format("ll")} `}
          description={`${item.todayWorkoutMuscles.map((data) => data.muscle)}`}
          accessoryLeft={(props) => ItemImage(props, item)}
          accessoryRight={ArrowIcon}
        />
      </TouchableWithoutFeedback>
    </ScrollView>
  );

  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      {workouts.workouts !== null && (
        <View>
          <List
            data={workouts.workouts.workouts}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color",
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  workouts: state.workout,
});
export default connect(mapStateToProps, { getWorkouts })(AdvanceWorkout);
