import React from "react";
import { View, Text } from "react-native"

function Home(props) {
    return (<View><Text>{props.msg}</Text></View>);
}

export default Home;