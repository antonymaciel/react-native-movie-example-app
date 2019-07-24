import React from "react";
import { connect } from "react-redux";
import Details from "../screens/details";
import { getMovieDetails } from "../actions/details"

class DetailsContainer extends React.Component {

  static navigationOptions = {
    headerMode: 'none',
  };

  constructor(props) {
    super(props);
    this.state = {
      videoId: null
    }
  }

  static getDerivedStateFromProps(props){
    const videoId = props.navigation.getParam('videoId', 'NO-ID');
    console.log('state detail container', videoId);
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
        videoId
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
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);