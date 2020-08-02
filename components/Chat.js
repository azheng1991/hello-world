import React from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  View,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Text,
} from "react-native";

export default class HelloChat extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  //pulling in information from Start.js name/color
  static navigationOptions = ({ navigation }) => {
    return {
      name: navigation.state.params.name,
      color: navigation.state.params.color,
    };
  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
        }}
      />
    );
  }

  render() {
    //store the background color to use
    let color = this.props.route.params.color;

    //store the title to use
    let name = this.props.route.params.name;

    return (
      <View
        style={{
          backgroundColor: color,
          flex: 1,
        }}
      >
        <GiftedChat
          renderBubble={this.renderBubble}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}
