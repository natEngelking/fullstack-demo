import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

//component did mount
//fetch server data

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }


  componentDidMount() {
  fetch('http://localhost:3000/api/bug')
    .then(res => res.json())
    .then((data) => {
      this.setState({bugs: data});
    },
    (error) => {
      console.log(error)
    });

  }
  

  filterHandler(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
          <BugTile
            bugName={this.state.bugs.bugName}
            bugDescription={this.state.bugs.bugDescription}
            reportedBy={this.state.bugs.reportedBy}
            createdDate={this.state.bugs.createdDate}
            assignedTo={this.state.bugs.assignedTo}
            threatLevel={this.state.bugs.threatLevel}
            key={this.state.bugs.bugName}
          />
      </table>
    );
  }
}

export default App;
