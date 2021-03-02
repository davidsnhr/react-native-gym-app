import React, { useEffect } from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";

const LevelWorkout = ({ navigation, user, getProfileById }) => {
  useEffect(() => {
    user && getProfileById(user._id);
  }, [user]);
  console.log("usuario home", user);

  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            paddingTop: 20,
            width: wp("100%"),
            display: "flex",
            paddingLeft: wp("2%"),
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: wp("95%"),
              height: hp("35%"),
              borderRadius: 20,
              opacity: 0.8,
            }}
            source={require("../../assets/img/advance.jpg")}
          />
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("8%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h7"
          >
            PRINCIPIANTE
          </Text>
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("1%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h5"
          >
            HARDER GYM
          </Text>

          <View
            style={{
              zIndex: 2,
              paddingTop: hp("25%"),
              paddingLeft: wp("70%"),
              position: "absolute",
            }}
          >
            <Button
              size="small"
              style={{
                width: wp("20%"),
              }}
            >
              Ver
            </Button>
          </View>
        </View>

        <View
          style={{
            paddingTop: 20,
            width: wp("100%"),
            display: "flex",
            paddingLeft: wp("2%"),
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: wp("95%"),
              height: hp("35%"),
              borderRadius: 20,
              opacity: 0.8,
            }}
            source={require("../../assets/img/advance.jpg")}
          />
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("8%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h7"
          >
            INTERMEDIO
          </Text>
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("1%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h5"
          >
            HARDER GYM
          </Text>

          <View
            style={{
              zIndex: 2,
              paddingTop: hp("25%"),
              paddingLeft: wp("70%"),
              position: "absolute",
            }}
          >
            <Button
              size="small"
              style={{
                width: wp("20%"),
              }}
            >
              Ver
            </Button>
          </View>
        </View>

        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            width: wp("100%"),
            display: "flex",
            paddingLeft: wp("2%"),
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: wp("95%"),
              height: hp("35%"),
              borderRadius: 20,
              opacity: 0.8,
            }}
            source={require("../../assets/img/advance.jpg")}
          />
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("8%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h7"
          >
            AVANZADO
          </Text>
          <Text
            style={{
              zIndex: 2,
              paddingTop: hp("1%"),
              paddingLeft: wp("5%"),
              position: "absolute",
              fontWeight: "bold",
            }}
            category="h5"
          >
            VENOM TEAM
          </Text>

          <View
            style={{
              zIndex: 2,
              paddingTop: hp("25%"),
              paddingLeft: wp("70%"),
              position: "absolute",
            }}
          >
            <Button
              size="small"
              style={{
                width: wp("20%"),
              }}
              onPress={() => navigation.navigate("AdvanceWorkout")}
            >
              Ver
            </Button>
          </View>
        </View>
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
  user: state.auth.user,
});

export default connect(mapStateToProps, { getProfileById })(LevelWorkout);
