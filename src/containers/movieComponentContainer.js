import React from "react";
import { IMAGES_BASE_URL } from "../constants/config"
import MovieComponent from "../components/movieComponent" 

class MovieComponentContainer extends React.Component {
    constructor(props){
        super(props);
        const { movie } = props;
        const [year, , ] = movie.release_date.split('-');
        const url = IMAGES_BASE_URL + movie.poster_path;
        const { title, vote_average } = movie;
        this.state = {
            year,
            url,
            title,
            vote_average 
        };
    }

    render() {
        const { year, url, title, vote_average } = this.state;
        return (
            <MovieComponent 
                year={year}
                imageUrl={url}
                title={title} 
                vote_average={vote_average}
            />
        );
    }
}

export default MovieComponentContainer;