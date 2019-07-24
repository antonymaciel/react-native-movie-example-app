import React from "react";
import { View, Text } from "react-native"
import styles from "../styles";

function Reviews(props) {
    console.log('reviews', props);
    return (<View style={styles.pageContainer}><Text>reviews</Text></View>);
}

export default Reviews;