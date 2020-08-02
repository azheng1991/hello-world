import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const image = "/components/Background.png";

export default class Start extends React.Component {
  constructor() {
    super();
    this.state = { text: "", color: "" };
  }
  render() {
    return (
      <ImageBackground
        source={require("./BackgroundImage.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.titleText}>MyChat</Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.nameText}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Your Name"
          ></TextInput>

          <Text style={styles.textBackgroundColor}>
            Choose Background Color:
          </Text>
          <View style={styles.colorSelection}>
            <TouchableOpacity
              onPress={() => this.setState({ color: "#090C08" })}
              style={[styles.colorButton, styles.color1]}
            />
            <TouchableOpacity
              onPress={() => this.setState({ color: "#474056" })}
              style={[styles.colorButton, styles.color2]}
            />
            <TouchableOpacity
              onPress={() => this.setState({ color: "#8A95A5" })}
              style={[styles.colorButton, styles.color3]}
            />
            <TouchableOpacity
              onPress={() => this.setState({ color: "#B9C6AE" })}
              style={[styles.colorButton, styles.color4]}
            />
          </View>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text
              style={styles.buttonTextStyle}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.text,
                  color: this.state.color,
                })
              }
            >
              Start Chatting
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    width: "88%",
    height: "44%",
    marginBottom: 15,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 100,
  },
  nameText: {
    height: 70,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
    textAlign: "center",
    borderColor: "grey",
    borderWidth: 2,
    padding: 20,
    width: "88%",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonStyle: {
    width: "88%",
    backgroundColor: "#757083",
    alignItems: "center",
    height: 70,
    justifyContent: "space-evenly",
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  textBackgroundColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    textAlign: "left",
    alignItems: "flex-start",
    height: 40,
    width: "88%",
  },
  colorSelection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: 50,
  },
  colorButton: {
    height: 35,
    width: 35,
    borderRadius: 70,
    marginHorizontal: 20,
  },
  color1: {
    backgroundColor: "#090C08",
  },
  color2: {
    backgroundColor: "purple",
  },
  color3: {
    backgroundColor: "#8A95A5",
  },
  color4: {
    backgroundColor: "#B9C6AE",
  },
});
