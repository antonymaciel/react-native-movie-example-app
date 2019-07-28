import React from "react";
import { IMAGES_BASE_URL } from "../constants/config";
import MovieComponent from "../components/movieComponent"; 

class MovieComponentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            year: null,
            url: null
        };
    }

    static getDerivedStateFromProps(props){
        const { movie } = props;
        const [year, , ] = movie.release_date.split('-');
        const url = IMAGES_BASE_URL + movie.poster_path;
        return {
            year,
            url
        };
    }

    onClickMovie = () => {
        const { id } = this.props.movie;
        this.props.navigation.navigate('Details', {
            videoId: id
        });
    }

    render() {
        const { year, url } = this.state;
        const { title, vote_average } = this.props.movie;
        return (
            <MovieComponent
                year={year}
                imageUrl={url}
                title={title} 
                vote_average={vote_average}
                onClick={() => this.onClickMovie()}
            />
        );
    }
}

export default MovieComponentContainer;