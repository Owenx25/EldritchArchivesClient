
import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 
const Entry = (props) => (
  <tr>
    <td>{props.entry.compendium_type}</td>
    <td>{props.entry.title}</td>
    <td>{props.entry.author}</td>
    <td>{props.entry.description}</td>
    <td>{props.entry.source}</td>
    <td>{props.entry.references}</td>
    <td>
      <Link to={"/edit/" + props.entry._id}>Edit</Link> |
      <a href="/" onClick={() => props.deleteEntry(props.entry._id)}>Delete</a>
    </td>
  </tr>
);
 
export default class EntryList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.state = { entries: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/compendium/")
      .then(response => this.setState({ entries: response.data }))
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteEntry(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    }).catch(err => console.error(err));
 
    this.setState({
      record: this.state.entries.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
  entryList() {
    return this.state.entries.map((currentEntry) => {
      return (
        <Entry
          entry={currentEntry}
          deleteEntry={this.deleteEntry}
          key={currentEntry._id}
        />
      );
    });
  }
 
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Entry List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Compendium Type</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Source</th>
              <th>References</th>
            </tr>
          </thead>
          <tbody>{this.entryList()}</tbody>
        </table>
      </div>
    );
  }
}
 