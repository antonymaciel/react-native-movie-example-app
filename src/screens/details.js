import React from "react";
import { View, Button, Image, Text} from "react-native";
import { Rating } from 'react-native-elements';
import styles from "../styles/details";
import appStyles from "../styles";
import { IMAGES_BASE_URL } from "../constants/config"

class Details extends React.Component {

    static defaultProps= {
        details: {
            movieDetails: {title: 'Hello',
            genres: [
                {name: 'asdfasd'}, {name:'asdfaerr'}
            ], vote_average: 3, vote_count: 5, overview: "tofoais djfasdto foaisdjfas dtofoais djfasdtof oaisdjfasd tofoaisdjfasd fasd fas df asdf as dfas df asdf asd fas dfasd asd f asd fa sdf as dfa"
        }
        }
    }

    constructor(props){
        super(props);
    }

    render() {
        const { movieDetails } = this.props.details;
        if (movieDetails) {
            const urlbackdropImage = IMAGES_BASE_URL + movieDetails.backdrop_path;
            const urlposterImage = IMAGES_BASE_URL + movieDetails.poster_path;
            let generes;
            movieDetails.genres.forEach((genere) => {
                generes = generes ? generes + ", " + genere.name : genere.name;
            })
            return (
                <View style={appStyles.pageContainer}>
                    <View>
                        <Image style={styles.backdropImage} source={{uri: urlbackdropImage}}/>
                        <Image style={styles.posterImage} resizeMode='cover' source={{uri: urlposterImage}}/>
                        <Text style={styles.title}>{movieDetails.title}</Text>
                    </View>
                    <View style={styles.generalInfo}>
    
                            <Text style={styles.votesCount}>{movieDetails.vote_count} <Text style={styles.infoText}>People watching</Text></Text>
                            <Text style={styles.infoText} numberOfLines={3}>{generes}</Text>
                            <View style={styles.ratingContainer}>
                                <Text>{movieDetails.vote_average}</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    ratingCount={5}
                                    fractions={1}
                                    startingValue={movieDetails.vote_average / 2}
                                    count={1}
                                    ratingColor='red'
                                    //ratingBackgroundColor='gray'
                                    //type='custom'
                                    //ratingTextColor='red'
                                />
                            </View>
                    </View>
                    <View style={styles.descriptionAndButtonContainer}>
                        <Text style={styles.descriptionText} numberOfLines={5}>{movieDetails.overview}</Text>
                        <Button onPress={() => this.props.goToReviews()} title={'Show Reviews'}/>
                    </View>
                </View>
            );
        }
        return <Text>Loading...</Text>;
    }
    
  }

export default Details;
