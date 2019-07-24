import React from "react";
import Details from "../screens/details";
import styles from "../styles";

class DetailsContainer extends React.Component {

  static navigationOptions = {
    headerMode: 'none',
  };

  constructor(props) {
    super(props);
    this.state = { hello: 'hello' }
  }

  render() {
    return <Details msg={this.state.hello} />;

  }
}

export default DetailsContainer;