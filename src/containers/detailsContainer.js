import React from "react";
import  { Button } from "react-native";
import { connect } from "react-redux";
import Details from "../screens/details";
import { getMovieDetails, movieDetailsFinish } from "../actions/details";
import styles from "../styles/details";
import Loading from "../components/loading"
import Error from "../components/error"
import { IMAGES_BASE_URL, IMAGE_SIZE_BACKDROP, IMAGE_SIZE_POSTER } from "../constants/config"

class DetailsContainer extends React.Component {

  static navigationOptions = {
    headerMode: 'none',
    headerTransparent: true,
    headerStyle: styles.headerStyle,
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  }

  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
      urlbackdropImage: null,
      urlposterImage: null,
      generes: null,
      averageNumber: null,
      averageDecimal: null
    }
  }

  static getDerivedStateFromProps(props) {
    const { movieDetails } = props.movieDetails;
    const videoId = props.navigation.getParam('videoId');
    if (movieDetails) {
      const urlbackdropImage = IMAGES_BASE_URL + IMAGE_SIZE_BACKDROP + movieDetails.backdrop_path;
      const urlposterImage = IMAGES_BASE_URL + IMAGE_SIZE_POSTER + movieDetails.poster_path;
      let generes;
      movieDetails.genres.forEach((genere) => {
          generes = generes ? generes + ", " + genere.name : genere.name;
      });
      const vote_average = movieDetails.vote_average;
      let [averageNumber, averageDecimal] = vote_average.toString().split('.');
      averageDecimal = averageDecimal == null ? 0 : averageDecimal; 
      return {
        urlbackdropImage,
        urlposterImage,
        generes,
        videoId,
        averageNumber,
        averageDecimal
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
      const { urlbackdropImage, urlposterImage , generes, averageNumber, averageDecimal } = this.state;
      const { title, vote_count, overview, vote_average } = movieDetails;
      return ( 
        <Details
          urlbackdropImage={urlbackdropImage}
          urlposterImage={urlposterImage}
          generes={generes}
          title={title}
          vote_count={vote_count}
          averageNumber={averageNumber}
          averageDecimal={averageDecimal}
          vote_average={vote_average}
          overview={overview}
          goToReviews={() => this.goToReviews()}
        />
      ); 
    } else if (loading) {
      return ( 
        <Loading />
      )  
    } else {
      return <Error />
    }
  }

  componentWillUnmount(){
    this.props.movieDetailsFinish();
  }

}

const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails,
  }
};

const mapDispatchToProps = dispatch => ({
  getMovieDetails: (idMovie) => dispatch(getMovieDetails(idMovie)),
  movieDetailsFinish: () => dispatch(movieDetailsFinish()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);