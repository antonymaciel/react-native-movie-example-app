import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native"
import styles from "../styles/movieComponent";

class MovieComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { year, imageUrl, title, vote_average } = this.props;
        return (
            <TouchableOpacity style={styles.movieContainer}>
                <Image style={styles.image} resizeMode="cover" source={{uri: imageUrl}}/> 
                <View style={styles.averageContainer}>
                    <Text style={styles.averageText}>{vote_average}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.date} >{year}</Text>
                    <Text style={styles.titleText} >{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default MovieComponent;