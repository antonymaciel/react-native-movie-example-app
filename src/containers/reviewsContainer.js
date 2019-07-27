import React from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { IMAGES_BASE_URL } from "../constants/config";
import Reviews from "../screens/reviews";
import styles from "../styles";
import { getMovieReviews, movieReviewsFinish } from "../actions/reviews";


class ReviewsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() => {
            const movieReviewsFinish = navigation.getParam('movieReviewsFinish');
            movieReviewsFinish();
            navigation.goBack();
          }}
          title="Go Back"
          color="blue"
        />
      ),
      headerStyle: styles.backroundColorApp,
      headerTitleStyle: styles.header,
    };
  };

  constructor(props) {
    super(props);
    const videoId = props.navigation.getParam('videoId');
    const posterUrl = IMAGES_BASE_URL + props.navigation.getParam('posterPath');
    this.state = {
      page: 1,
      videoId,
      posterUrl
    }
  }

  onNewPage(){
    const { videoId, page } = this.state;
    if (page < this.props.movieReviews.reviews.total_pages) {
      const newPage = page + 1;
      this.props.getMovieReviews(videoId, newPage);
      this.setState({page: newPage});
    }
  }

  componentDidMount(){
    const { videoId, page } = this.state;
    this.props.getMovieReviews(videoId, page);
  }

  render() {
    return (
      <Reviews 
        reviews={this.props.movieReviews}
        posterUrl={this.state.posterUrl}
        onNewPage={() => this.onNewPage()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movieReviews: state.movieReviews,
  }
};

const mapDispatchToProps = dispatch => ({
  getMovieReviews: (idMovie, page) => dispatch(getMovieReviews(idMovie, page)),
  movieReviewsFinish: () => dispatch(movieReviewsFinish()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);