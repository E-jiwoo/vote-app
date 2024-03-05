import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import Smile from "../../assets/smile.png";

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image source={Smile} style={styles.icon} />
      <Text style={styles.title}>회의 참여 대기 중</Text>
      <Text style={styles.text}>회의 시작 시 투표 페이지로 이동합니다</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 80,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    marginVertical: 18,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 89,
    height: 89,
    position: "relative",
    left: 70,
    marginVertical: 15,
  },
});

export default App;
