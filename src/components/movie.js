import React from "react";
import { View, Text, Image, Dimensions } from "react-native"
import styles from "../styles";

class Movie extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { movie, numcolums } = this.props;
        const uri = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        const {height, width} = Dimensions.get('window');
        const itemWidth = (width - ((numcolums + 1) * 10)) / numcolums;
        const itemHeight = (height - 80 ) / numcolums;
        return (
            <Image style={{width: itemWidth, height: itemHeight, marginTop: 10, marginLeft: 10}} resizeMode="cover" source={{uri}}/> 
        );
    }
}

export default Movie;