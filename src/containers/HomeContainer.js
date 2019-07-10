import React from "react";
import Home from "../screens/Home";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = { hello: 'hello' }
  }
  
  render() {
    return <Home msg={this.state.hello} />;

  }
}

export default HomeContainer;