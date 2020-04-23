import React from 'react';
import App from './App.jsx'

const BugTile = (props) => (

  <tbody>
    <tr className="bugTile">
      <td>bugName input</td>
      <td>bugDescription input</td>
      <td>reportedBy input</td>
      <td>createdDate input </td>
      <td>assignedTo input</td>
      <td>threatLevel input </td>
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
