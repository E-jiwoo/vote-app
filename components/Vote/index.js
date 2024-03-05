import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from "react-native";
import Cloud from "../../assets/cloud.png";
import Check from "../../assets/check.png";
import No from "../../assets/no.png";

const App = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image source={Cloud} style={styles.icon} />
      <Text style={styles.title}>
        다음 안건에 대한{"\n"}
        의견을 눌러주세요
      </Text>
      <TouchableOpacity
        title="로그인 하기"
        color="#2196F3"
        onPress={() => Alert.alert("로그인되었습니다")}
        style={styles.yes}
      >
        <Image source={Check} style={styles.Yimoge} />
        <Text style={styles.text}>찬성</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="로그인 하기"
        color="#2196F3"
        onPress={() => Alert.alert("로그인되었습니다")}
        style={styles.no}
      >
        <Image source={No} style={styles.Nimoge} />
        <Text style={styles.text}>반대</Text>
      </TouchableOpacity>
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
    fontSize: 16,
    position: "relative",
    top: 80,
  },
  text: {
    textAlign: "center",
    marginVertical: 18,
    fontWeight: "bold",
    fontSize: 18,
    position: "relative",
    top: 30,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 89,
    height: 89,
    position: "relative",
    top: 70,
    left: 70,
    marginVertical: 15,
  },
  Yimoge: {
    width: 78,
    height: 57,
    position: "relative",
    top: 30,
    left: 32,
    marginVertical: 15,
  },
  Nimoge: {
    width: 57.2,
    height: 57.2,
    position: "relative",
    top: 30,
    left: 40,
    marginVertical: 15,
  },
  yes: {
    backgroundColor: "#fff",
    borderColor: "#3498db",
    borderWidth: 5,
    height: 225,
    width: 150,
    borderRadius: 10,
    position: "relative",
    top: 200,
    right: 45,
  },
  no: {
    backgroundColor: "#fff",
    borderColor: "#E20C00",
    borderWidth: 5,
    height: 225,
    width: 150,
    borderRadius: 10,
    position: "relative",
    bottom: 25,
    left: 125,
  },
});

export default App;
