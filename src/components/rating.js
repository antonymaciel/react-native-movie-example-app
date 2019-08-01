import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/rating";
import { StackViewTransitionConfigs } from "react-navigation";

class Rating extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { rating } = this.props;
        let stars=[];
        const count = Math.round(rating/2);
        for(let i=0; i < count; i++){
            stars.push(<Ionicons key={i} name="md-star" size={25} color="rgb(210, 54, 100)" />);
        }
        for(let i=0; i < (5 - count); i++){
            stars.push(<Ionicons key={5 - i} name="md-star" size={25} color="rgb(210, 210, 210)" />);
        }
        return (
            <View style={styles.container}>{stars}</View>
        );
    }
}

export default Rating;