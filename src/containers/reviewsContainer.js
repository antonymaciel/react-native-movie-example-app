import React from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import Reviews from "../screens/reviews";
import { getMovieReviews, movieReviewsFinish } from "../actions/reviews"

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
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  static getDerivedStateFromProps(props) {
    const videoId = props.navigation.getParam('videoId');
    return {
      videoId
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
    return <Reviews reviews={this.props.movieReviews} />;

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