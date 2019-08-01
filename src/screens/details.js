import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { LinearGradient } from 'expo';
import Rating from '../components/rating';
import styles from "../styles/details";
import appStyles from "../styles";

class Details extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {urlbackdropImage, urlposterImage, generes, title, vote_count, averageNumber, averageDecimal, vote_average, overview, goToReviews } = this.props;
        return (
            <View style={appStyles.pageContainer}>
                <View>
                    <Image style={styles.backdropImage} source={{uri: urlbackdropImage}}/>
                    <LinearGradient
                        colors={['transparent', 'rgb(19, 19, 19)']}
                        style={[styles.backdropImage, styles.gradient]}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </LinearGradient>
                    <View style={styles.posterImageContainer}>
                        <Image style={styles.posterImage} resizeMode='cover' source={{uri: urlposterImage}}/>
                    </View>
                </View>
                <View style={styles.generalInfo}>
                    <Text style={styles.votesCount}>{vote_count} <Text style={styles.infoText}>People watching</Text></Text>
                    <Text style={styles.infoText} numberOfLines={3}>{generes}</Text>
                    <View style={styles.ratingContainer}>
                        <View style={styles.averageContainer}>
                            <Text style={styles.averageText}>{averageNumber}</Text>
                            <Text style={styles.averageDecimal}>.{averageDecimal}</Text>
                        </View>
                        <Rating
                            rating={vote_average}
                        />
                    </View>
                </View>
                <View style={styles.descriptionAndButtonContainer}>
                    <Text style={styles.descriptionText} numberOfLines={5}>{overview}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => goToReviews()}>
                        <LinearGradient
                            colors={['rgb(239, 152, 0)', 'rgb(210, 54, 100)']}
                            style={styles.buttonGradient}
                            start={[0.0, 0.5]}
                            end={[1, 0.5]}
                        >   
                            <Text style={styles.buttonLabel}>Show Reviews</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  }

export default Details;
