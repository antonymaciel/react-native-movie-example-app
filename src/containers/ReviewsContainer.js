import React from "react";
import Reviews from "../screens/Reviews";
import styles from "../styles";

class ReviewsContainer extends React.Component {

  static navigationOptions = {
    headerStyle: styles.backroundColorApp,
    headerTitleStyle: styles.header,
  };

  constructor(props) {
    super(props);
    this.state = { hello: 'hello' }
  }

  render() {
    return <Reviews msg={this.state.hello} />;

  }
}

export default ReviewsContainer;