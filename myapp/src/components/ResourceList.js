import React  from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
  // this.state.resources is the all the record we fetch from the api
  state = { resources: [] };
  // we want to render todo posts as soon as we render app to our screen
  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    // axios sets all response inside of `response.data` object
    this.setState({ resources: response.data });
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;