import React, { useEffect } from "react";
import { View } from "react-native";
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
} from "@ui-kitten/components";
import moment from "moment";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode-svg";

const AccessCode = ({ route, user }) => {
  useEffect(() => {
    user
  }, [])

  const styles = useStyleSheet(themedStyles);
  const { userId } = route.params;
  console.log(user);
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text category="h6" style={{ fontWeight: "bold" }}>
            {user.name}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            paddingBottom: 4,
          }}
        >
          <Text appearance="hint">Miembro desde {moment(user.date).format("ll")}</Text>
        </View>
        <View style={{width: wp('80%'), height: hp('40%'), backgroundColor: 'white', borderRadius:'20' }}>
          <View style={{zIndex: 3, display:'flex', justifyContent: 'center', flexDirection:'row', alignItems:'center', paddingTop:'10%'}}>
           <QRCode size={250} value={userId} />

          </View>
        </View>
      </View>
      <Text appearance="hint">Utiliza el código para acceso al gym</Text>
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
})

export default connect(mapStateToProps)(AccessCode);
