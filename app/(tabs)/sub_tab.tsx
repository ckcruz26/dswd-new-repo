import React from "react";
import { Text, View } from "react-native";

export default function SubTab() {
  return (
    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: stylesOfSubTab.viewSize.width,
          height: stylesOfSubTab.viewSize.height,
          backgroundColor: stylesOfSubTab.colorGroup.powderblue,
          justifyContent: "center", // center vertically
          alignItems: "center", // center horizontally
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>Text I</Text>
      </View>
      <View
        style={{
          width: stylesOfSubTab.viewSize.width,
          height: stylesOfSubTab.viewSize.height,
          backgroundColor: stylesOfSubTab.colorGroup.skyblue,
          justifyContent: "center", // center vertically
          alignItems: "center", // center horizontally
        }}
      ><Text style={{  color: "white", fontSize: 30}}>Text II</Text></View>
      <View
        style={{
          width: stylesOfSubTab.viewSize.width,
          height: stylesOfSubTab.viewSize.height,
          backgroundColor: stylesOfSubTab.colorGroup.steelblue,
          justifyContent: "center", // center vertically
          alignItems: "center", // center horizontally
        }}
      >
        <Text style={{  color: "white", fontSize: 30}}>Text III</Text>
      </View>
    </View>
  );
}

const stylesOfSubTab = {
  viewSize: {
    width: 600,
    height: 100,
  },
  colorGroup: {
    powderblue: "powderblue",
    skyblue: "skyblue",
    steelblue: "steelblue",
  },
};
