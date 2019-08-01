import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native"
import { LinearGradient } from 'expo';
import styles from "../styles/movieComponent";

class MovieComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { year, imageUrl, title, averageNumber, averageDecimal } = this.props;
        return (
            <TouchableOpacity style={styles.movieContainer} onPress={() => this.props.onClick()}>
                <LinearGradient
                    colors={['transparent', 'rgb(19, 19, 19)']}
                    style={[styles.image, styles.gradient]}
                >
                    <LinearGradient
                        colors={['rgb(235, 136, 0)', 'rgb(210, 54, 100)']}
                        style={styles.averageGradient}
                    >
                        <View style={styles.averageContainer}>
                            <Text style={styles.averageText}>{averageNumber}</Text>
                            <Text style={styles.averageDecimal}>.{averageDecimal}</Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.titleContainer}>
                        <Text style={styles.date} >{year}</Text>
                        <Text style={styles.titleText} >{title}</Text>
                    </View>
                </LinearGradient>
                <Image style={[styles.image]} resizeMode="cover" source={{uri: imageUrl}}/> 
                
            </TouchableOpacity> 
        );
    }
}

export default MovieComponent;