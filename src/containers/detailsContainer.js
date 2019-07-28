import React from "react";
import  { Button } from "react-native";
import { connect } from "react-redux";
import Details from "../screens/details";
import { getMovieDetails } from "../actions/details";
import { movieReviewsFinish } from "../actions/reviews";
import styles from "../styles/details";
import Loading from "../components/loading"
import Error from "../components/error"
import { IMAGES_BASE_URL } from "../constants/config"

class DetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
    headerMode: 'none',
    headerTransparent: true,
    headerStyle: styles.headerStyle,
    headerLeft: (
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Go Back"
        color="blue"
      />
    ),
  }}

  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
      urlbackdropImage: null,
      urlposterImage: null,
      generes: null
    }
  }

  static getDerivedStateFromProps(props) {
    const { movieDetails } = props.movieDetails;
    const videoId = props.navigation.getParam('videoId');
    if (movieDetails) {
      const urlbackdropImage = IMAGES_BASE_URL + movieDetails.backdrop_path;
      const urlposterImage = IMAGES_BASE_URL + movieDetails.poster_path;
      let generes;
      movieDetails.genres.forEach((genere) => {
          generes = generes ? generes + ", " + genere.name : genere.name;
      })
      return {
        urlbackdropImage,
        urlposterImage,
        generes,
        videoId
      }
    }
    return {
      videoId
    }
  }

  componentDidMount(){
    const { videoId } = this.state;
    this.props.getMovieDetails(videoId);
  }

  goToReviews = () => {
    const { videoId } = this.state;
    this.props.navigation.navigate('Reviews',{
        videoId,
        movieReviewsFinish: () => this.props.movieReviewsFinish(),
        posterPath: this.props.movieDetails.movieDetails.poster_path
    });
  }

  render() {
    const { movieDetails, loading } = this.props.movieDetails;
    if (movieDetails) {
      const { urlbackdropImage, urlposterImage , generes } = this.state;
      const { title, vote_count, vote_average, overview } = movieDetails;
      return ( 
        <Details
          urlbackdropImage={urlbackdropImage}
          urlposterImage={urlposterImage}
          generes={generes}
          title={title}
          vote_count={vote_count}
          vote_average={vote_average}
          overview={overview}
          goToReviews={() => this.goToReviews()}
        />
      ); 
    } else if (loading) {
      return <Loading />      
    } else {
      return <Error />
    }
  }
}

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails,
  }
};

const mapDispatchToProps = dispatch => ({
  getMovieDetails: (idMovie) => dispatch(getMovieDetails(idMovie)),
  movieReviewsFinish: () => dispatch(movieReviewsFinish()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);