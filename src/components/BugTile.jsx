import React from 'react';
import App from './App.jsx';
import CreateBug from './CreateBug';

const BugTile = (props) => (

  <tbody>
    <tr className="bugTile">
      <td> <CreateBug/> </td>
      <td> <CreateBug/> </td>
      <td> <CreateBug/> </td>
      <td> <CreateBug/> </td>
      <td> <CreateBug/> </td>
      <td> <CreateBug/> nav bar </td>
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
