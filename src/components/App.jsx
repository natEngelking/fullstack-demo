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


        // componentDidMount() {
        //   let something = this.callServer()
        //   .then(console.log(something))
        //   .catch(err => console.log(err));
        // }
        //     callServer = async () => {
        //       try {
        //         let res = await fetch("https://localhost:3000", );
        //         let jsonRes = await res.json();
        //       } catch (err) {
        //         console.log(err);
        //       }
        //     }

  componentDidMount() {
  fetch('https://localhost:3000/api/bug')
    .then(res => res.json())
    .then((data) => {console.log(data)})
    // .then(
    //   (result) => {this.setState}
    // )
    // .catch(err) => {
    //   console.log(err);
    // }
  }

  // async callServer () {
  //   console.log('hi')
  // }

  filterHandler(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
    );
  }
}

export default App;
