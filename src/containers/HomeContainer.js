import React from "react";
import { connect } from "react-redux";
import { example } from "../actions/example"
import Home from "../screens/Home";
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
    this.state = { hello: 'hello' }
  }

  componentDidMount(){
    this.props.exampleFunction();
  }

  static getDerivedStateFromProps(props){
    return  { hello: props.exampleVariable.example1}
  }

  render() {
    return (<Home msg={this.state.hello ? 'true' : 'false'} />);

  }

  componentDidUpdate(props, state) {
    //console.log('compoennt', props.exampleVariable); NO DETECTA CAMBOIS DE PROPS
  }
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

const mapStateToProps = state => ({
  exampleVariable: state.example,
});

const mapDispatchToProps = dispatch => ({
  exampleFunction: () => dispatch(example()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);