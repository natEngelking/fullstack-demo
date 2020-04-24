import React from 'react';
import App from './App.jsx';
import CreateBug from './CreateBug';

const BugTile = (props) => (

  <tbody>
    <tr className="bugTile">
      <td><CreateBug bugName={props.bugName}
      bugDescription={props.bugDescription}
      reportedBy={props.reportedBy}
      createdDate={props.createdDate}
      assignedTo={props.assignedTo}
      // clearForm={props.clearForm}
      handleNewInput={props.handleNewInput} handleInputSubmit={props.handleInputSubmit} /> </td>
    </tr>
    <tr className="bugTile">
      <td>{props.bugName}</td>
      <td>{props.bugDescription}</td>
      <td>{props.reportedBy}</td>
      <td>{props.createdDate}</td>
      <td>{props.assignedTo}</td>
      <td>{props.threatLevel}</td>
    </tr>
  </tbody>
);

export default BugTile;
