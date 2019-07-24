import React from "react";
import { View, Text } from "react-native"
import styles from "../styles";

function Details(props) {
    return (<View style={styles.pageContainer}><Text>{props.msg}</Text></View>);
}

export default Details;