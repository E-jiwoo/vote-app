import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import Hugging from "../../assets/hugging.png";

const App = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image source={Hugging} style={styles.icon} />
      <Text style={styles.title}>
        회의 시작{"\n"}
        로그인 해주시길 바랍니다
      </Text>
      <Button
        title="로그인 하기"
        color="#2196F3"
        onPress={() => navigation.navigate("vote")}
      />
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
