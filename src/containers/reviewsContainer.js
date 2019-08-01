import React from "react";
import { Image, View } from "react-native";
import { connect } from "react-redux";
import { IMAGES_BASE_URL, IMAGE_SIZE_POSTER } from "../constants/config";
import Reviews from "../screens/reviews";
import styles from "../styles";
import { getMovieReviews, movieReviewsFinish } from "../actions/reviews";
import Loading from "../components/loading"
import Error from "../components/error"

class ReviewsContainer extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      headerStyle: [styles.backroundColorApp, styles.headerContainer],
      headerTitleStyle: styles.header,
      headerTintColor: 'black',
      headerTitleStyle: { color: 'black' },
      headerRight: ( 
        <Image 
          style={styles.imageHeader} 
          resizeMode='contain' 
          source={{uri:  IMAGES_BASE_URL + IMAGE_SIZE_POSTER + navigation.getParam('posterPath')}} 
        />
      )
  }};

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      videoId: null,
      posterUrl: null
    }
  }

  static getDerivedStateFromProps(props){
    const videoId = props.navigation.getParam('videoId');
    const posterUrl = IMAGES_BASE_URL + IMAGE_SIZE_POSTER + props.navigation.getParam('posterPath');
    return {
      videoId,
      posterUrl
    };
  }

  onNewPage(){
    const { videoId, page } = this.state;
    const { totalPages } = this.props.movieReviews;
    if (page < totalPages) {
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
    const { reviews, totalReviews, loading } = this.props.movieReviews;
    if (reviews !== null) {
      const { posterUrl } = this.state;
      return (
        <Reviews 
          total_results={totalReviews}
          results={reviews}
          posterUrl={posterUrl}
          onNewPage={() => this.onNewPage()}
        />
      );
    } else if (loading) {
      return(<Loading />);
    } else {
      return(<Error />);
    }
  }

  componentWillUnmount(){
    this.props.movieReviewsFinish();
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