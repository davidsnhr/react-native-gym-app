import React from "react";
import { Image } from "react-native";

const ImageMenuHarder = () => {
  return (
    <Image
      style={{ width: 100, height: 110, resizeMode: "contain" }}
      source={require("../../assets/img/harder_logo.png")}
    />
  );
};

export default ImageMenuHarder;
