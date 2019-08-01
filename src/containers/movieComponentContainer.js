import React from "react";
import { IMAGES_BASE_URL, IMAGE_SIZE_POSTER } from "../constants/config";
import MovieComponent from "../components/movieComponent"; 

class MovieComponentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            year: null,
            url: null,
            averageNumber: null,
            averageDecimal: null
        };
    }

    static getDerivedStateFromProps(props){
        const { movie } = props;
        const [year, , ] = movie.release_date.split('-');
        const url = IMAGES_BASE_URL + IMAGE_SIZE_POSTER + movie.poster_path;
        const vote_average = movie.vote_average;
        let [averageNumber, averageDecimal] = vote_average.toString().split('.');
        averageDecimal = averageDecimal == null ? 0 : averageDecimal; 
        return {
            year,
            url,
            averageNumber,
            averageDecimal
        };
    }

    onClickMovie = () => {
        const { id } = this.props.movie;
        this.props.navigation.navigate('Details', {
            videoId: id
        });
    }

    render() {
        const { year, url, averageNumber, averageDecimal } = this.state;
        const { title } = this.props.movie;
        return (
            <MovieComponent
                year={year}
                imageUrl={url}
                title={title}
                averageNumber={averageNumber}
                averageDecimal={averageDecimal}
                onClick={() => this.onClickMovie()}
            />
        );
    }
}

export default MovieComponentContainer;