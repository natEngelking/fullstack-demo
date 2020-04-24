import React from 'react';
import App from './App.jsx';
import bugTile from './BugTile';

class CreateBug extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <form className='bugTile'>

        <label>
          Bug Name
          <input type='text' name='bugName' placeholder='bug name' value={this.props.bugName} onChange={this.props.handleNewInput}
          onClick={this.props.handleInputSubmit}
          // onChange={this.handleNewInput}
          />
        </label>
        <label>
          Bug Description
          <input type='text' name='bugDescription' placeholder='bug description' value={this.props.bugDescription} onChange={this.props.handleNewInput}
          onClick={this.props.handleInputSubmit}
          // onChange={this.handleNewInput}
          />
        </label>
        <label>
          Reported Bug
          <input type='text' name='reportedBy' placeholder='Reported Bug' value={this.props.reportedBy} onChange={this.props.handleNewInput}
          onClick={this.props.handleInputSubmit}/>
        </label>
        <label>
          Creation Date
          <input type='text' name='createdDate' placeholder='Creation Date' value={this.props.createdDate} onChange={this.props.handleNewInput}
          onClick={this.props.handleInputSubmit}/>
        </label>
        <label>
          Assigned To
          <input type='text' name='assignedTo' placeholder='Assigned To' value={this.props.assignedTo} onChange={this.props.handleNewInput}
          onClick={this.props.handleInputSubmit}/>
        </label>

      <input type='submit' value='Create New Bug' onClick={this.props.handleInputSubmit}/>

      {/* <input type='submit' value='Clear Form' onClick={this.props.clearForm}/> */}

      </form>
    </div>
    )
  }
}

export default CreateBug;