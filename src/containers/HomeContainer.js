import React from "react";
import Home from "../screens/Home";
import styles from "../styles";

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

  render() {
    return <Home msg={this.state.hello} />;

  }
}

export default HomeContainer;