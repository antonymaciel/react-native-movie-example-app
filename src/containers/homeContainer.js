import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/movies"
import Home from "../screens/home";
import styles from "../styles";
//import PropTypes from 'prop-types';

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
    if (this.state.page < 1000) {
      const newPage = this.state.page + 1;
      this.props.getMovies(newPage);
      this.setState({page: newPage});
    }
  }

  render() {
  /*  console.log('render home container', this.props);
    let movies = [];
    const movie = {title : 'hello', release_date: '2019', vote_average: '5.1' };
    for (i=0;i <=100;i = i + 1){
      movie.id =  i * 90;
      movies[i] = movie;
    }
*/
    return (
      <Home
        navigation = {this.props.navigation}
        movies={this.props.movies.movies}
        onNewPage={() => this.onNewPage()} 
      />
    );

  }

  //componentDidUpdate(props, state) {
    //console.log('compoennt', props.exampleVariable); NO DETECTA CAMBOIS DE PROPS
  //}
}

/*
HomeContainer.propTypes = {
  navigator: PropTypes.object,
  wordsData: PropTypes.object,
  categoriesData: PropTypes.object,
  fetchWords: PropTypes.func,
  fetchCategories: PropTypes.func,
  fromOtherScreen: PropTypes.bool,
  userData: PropTypes.object,
};
*/

const mapStateToProps = state => {
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = dispatch => ({
  getMovies: (page) => dispatch(getMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);