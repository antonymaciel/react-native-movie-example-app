import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/movies"
import Home from "../screens/home";
import styles from "../styles";
import Loading from "../components/loading"
import Error from "../components/error"

class HomeContainer extends React.Component {

  static navigationOptions = {
    title: 'MOVIES',
    headerStyle: styles.backroundColorApp,
    headerTitleStyle: styles.header,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  componentDidMount(){
    this.props.getMovies();
  }

  onNewPage(){
    if (this.state.page < this.props.movies.totalPages) {
      const newPage = this.state.page + 1;
      this.props.getMovies(newPage);
      this.setState({page: newPage});
    }
  }

  onRefresh(){
    this.props.getMovies(1);
    this.setState({page: 1});
  }

  render() {
    const { movies, loading } = this.props.movies;
    if (movies) {
      return(
        <Home
          navigation = {this.props.navigation}
          movies={movies}
          onNewPage={() => this.onNewPage()} 
          loading
          onRefresh ={() => this.onRefresh()}
        />
      )
    } else if(loading) {
      return <Loading />;
    } else {
      return <Error />;
    };
  }

}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = dispatch => ({
  getMovies: (page) => dispatch(getMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);