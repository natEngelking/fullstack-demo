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
      bugReport: {
        bugName: '',
        bugDescription: '',
        reportedBy: '',
        createdDate: '',
        assignedTo: ''
      }
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


  handleNewInput(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name

  if (name === 'bugName') {
    this.setState(prevState => ({
      bugReport: {
        ...prevState.bugReport,
        bugName: target.value
      }
    }));
  };
  if (name === 'bugDescription') {
    this.setState(prevState => ({
      bugReport: {
        ...prevState.bugReport,
        bugDescription: target.value
      }
    }));
  };
  if (name === 'reportedBy') {
    this.setState(prevState => ({
      bugReport: {
        ...prevState.bugReport,
        reportedBy: target.value
      }
    }));
  };
  if (name === 'createdDate') {
    this.setState(prevState => ({
      bugReport: {
        ...prevState.bugReport,
        createDate: target.value
      }
    }));
  };
  if (name === 'assignedTo') {
    this.setState(prevState => ({
      bugReport: {
        ...prevState.bugReport,
        assignedTo: target.value
      }
    }));
  };
  console.log(this.state.bugReport.bugDescription);
  };

  // clearForm(e) {
  //   e.preventDefault();
  //   const target = e.target;
  //   const name = target.name;

  //     if (name === 'bugName') {
  //       this.setState({bugName: ''})
  //       }
  //     if (name === 'bugDescription') {
  //       this.setState({bugDescription: ''})
  //     }
  //     if (name === 'reportedBy') {
  //       this.setState({reportedBy: ''})
  //     }
  //     if (name === 'createdDate') {
  //       this.setState({createdDate: ''})
  //     }
  //     if (name === 'assignedTo') {
  //       this.setState({assignedTo: ''})
  //     }
  //   }

  handleInputSubmit(e, data = this.state.bugReport) {
    console.log(this.state.bugReport);
    e.preventDefault();
    console.log(data);
    fetch('http://localhost:3000/api/bug', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error);
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
            handleNewInput={this.handleNewInput.bind(this)}
            handleInputSubmit={this.handleInputSubmit.bind(this)}
            // clearForm={this.clearForm.bind(this)}
          />
      </table>
    );
  }
}

export default App;
