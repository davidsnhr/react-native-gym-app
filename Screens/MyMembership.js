import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Button, Card } from "@ui-kitten/components";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import QRCode from "react-native-qrcode-svg";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";

const MyMembership = ({ navigation, user }) => {
  useEffect(() => {
    user
  }, []);

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("AccessCode", { userId: user._id })
        }
      >
        <Card
          style={{
            backgroundColor: "#222222",
            maxWidth: wp("95%"),
            maxHeight: hp("35%"),
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ width: wp("50%") }}>
              <Text variant="s1" appearance="hint">
                Detalles de pago
              </Text>
            </View>
            <View>
              <QRCode size={120} value={`${user._id}`} />
            </View>
          </View>

          <View style={{ zIndex: 1 }}>
            <View>
              <Text variant="s1" appearance="hint">
                Número de membresía
              </Text>
            </View>
            <View>
              <Text variant="s1">001-F423</Text>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", paddingTop: 5 }}
          >
            <View style={{ width: wp("50%") }}>
              <Text variant="s1" appearance="hint">
                Fecha de pago
              </Text>
              <Text>02/03/2020</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: wp("40%"),
              }}
            >
              <Text variant="s1" appearance="hint">
                Expiración
              </Text>
              <Text>02/04/2020</Text>
            </View>
          </View>
        </Card>
      </TouchableWithoutFeedback>
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

export default connect(mapStateToProps)(MyMembership);
