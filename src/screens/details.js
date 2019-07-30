import React from "react";
import { View, Button, Image, Text } from "react-native";
import { Rating } from 'react-native-elements';
import styles from "../styles/details";
import appStyles from "../styles";

class Details extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {urlbackdropImage, urlposterImage, generes, title, vote_count, vote_average, overview, goToReviews } = this.props;
        return (
            <View style={appStyles.pageContainer}>
                <View>
                    <Image style={styles.backdropImage} source={{uri: urlbackdropImage}}/>
                    <Image style={styles.posterImage} resizeMode='cover' source={{uri: urlposterImage}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.generalInfo}>

                        <Text style={styles.votesCount}>{vote_count} <Text style={styles.infoText}>People watching</Text></Text>
                        <Text style={styles.infoText} numberOfLines={3}>{generes}</Text>
                        <View style={styles.ratingContainer}>
                            <Text>{vote_average}</Text>
                            <Rating
                                imageSize={20}
                                readonly
                                ratingCount={5}
                                fractions={1}
                                startingValue={vote_average / 2}
                                count={1}
                                ratingColor='red'
                            />
                        </View>
                </View>
                <View style={styles.descriptionAndButtonContainer}>
                    <Text style={styles.descriptionText} numberOfLines={5}>{overview}</Text>
                    <Button onPress={() => goToReviews()} title={'Show Reviews'}/>
                </View>
            </View>
        );
    }
  }

export default Details;
