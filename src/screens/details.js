import React from "react";
import { View, Button, Text } from "react-native"
import styles from "../styles";



function Details(props) {
    console.log('details', props.details);
    return (<View style={styles.pageContainer}><Button onPress={() => props.goToReviews()} title={'test'}/></View>);
}

export default Details;