import React  from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
  // this.state.resources is the all the record we fetch from the api
  state = { resources: [] };
  // we want to render todo posts as soon as we render app to our screen
  // componentDidMount() only gets invoke once only
  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    // axios sets all response inside of `response.data` object
    this.setState({ resources: response.data });
  }

  // lifecycle method gets called any time component renders 
  //  b/c of parent component or we `.setState` inside of class
  //  based component
  async componentDidUpdate(prevProps) {
    // if previous props were not same as current props only then run
    if (prevProps.resource !== this.props.resource) {
      // prevProps obj that shows the what previous props were passed in
      // console.log(prevProps);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;