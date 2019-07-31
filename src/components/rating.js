import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native"
import styles from "../styles/rating";

class Rating extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { rating } = this.props;
        return (
            <View><Text>{this.props.rating}</Text></View>
        );
    }
}

export default Rating;