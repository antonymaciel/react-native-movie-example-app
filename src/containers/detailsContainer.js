import React from "react";
import  { Button } from "react-native";
import { connect } from "react-redux";
import Details from "../screens/details";
import { getMovieDetails } from "../actions/details";
import { movieReviewsFinish } from "../actions/reviews";
import styles from "../styles/details";

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
    const videoId = props.navigation.getParam('videoId');
    this.state = {
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
    return ( 
      <Details
        details={this.props.movieDetails}
        goToReviews={() => this.goToReviews()}
      />
    );
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