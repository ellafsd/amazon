import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#88dae0", "#bdeee9", "#c3f1e1"]}
    >
        <SafeAreaView style={{flexDirection:'row'}}>
      <Feather name="map" size={16} color="black" />
      <Text style={styles.deliver}>Delivery to the USA</Text>
      <SimpleLineIcons name="arrow-down" size={10} color="black" />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
    paddingHorizontal: 6,
  },
});
