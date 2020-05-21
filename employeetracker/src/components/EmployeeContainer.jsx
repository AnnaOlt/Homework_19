import React, { Component } from "react";
import API from "../utils/API";
import Employees from "./Employees";

class EmployeeContainer extends Component {
  state = {
    result: [],
    searchResult: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  whenSorted = (event) => {
    let value = event.target.value;
    console.log(`sorting...${value}`);
    // Sort result state based on name
    // Set state to sorted list

    // Updating the input's state
    // this.setState({
    //   [name]: value
    // });
  };

  getUsers = () => {
    API.getUsers()
      .then((res) => {
        console.log(`response: ${res.data.results}`);
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleSort = (type) => {
    console.log("you clicked on sort: " + type);
    // sort the state.result array based on the type
    if (type === "Title") {
      console.log("Sorting by Title");
      // Array is this.state.result
      let arr = this.state.result;
      arr.sort(function (a, b) {
        if (a.name.title < b.name.title) {
          return -1;
        }
        if (a.name.title > b.name.title) {
          return 1;
        }
        return 0;
      }); // End sort
      this.setState({ result: arr });
    } // End if
    // Sort by first name
    if (type === "First") {
      console.log("Sorting by First Name");
      // Array is this.state.result
      let arr = this.state.result;
      arr.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      }); // End sort
      this.setState({ result: arr });
    } // End if
    if (type === "Last") {
      console.log("Sorting by Last Name");
      // Array is this.state.result
      let arr = this.state.result;
      arr.sort(function (a, b) {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      }); // End sort
      this.setState({ result: arr });
    } // End if
  }; // End handleSort

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    // Get the state array and set to tmp array
    let arr = this.state.result;
    arr = arr.filter((person) => {
      return person.name.first.includes(value);
    });
    this.setState({ searchResult: arr });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Employees</a>
          <form className="form-inline">
            <input
              onChange={this.handleInputChange}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>

        <table className="table table-hover">
          <thead>
            <tr>
              <th
                className="data-comun"
                scope="col"
                onClick={() => this.handleSort("Title")}
              >
                Title
              </th>
              <th
                className="data-comun"
                scope="col"
                onClick={() => this.handleSort("First")}
              >
                First
              </th>
              <th
                className="data-comun"
                scope="col"
                onClick={() => this.handleSort("Last")}
              >
                Last
              </th>
              <th className="data-comun" scope="col">
                Photo
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.searchResult.length > 0
              ? this.state.searchResult.map((employee) => (
                  <Employees
                    title={employee.name.title}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    image={employee.picture.thumbnail}
                  />
                ))
              : this.state.result.map((employee) => (
                  <Employees
                    title={employee.name.title}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    image={employee.picture.thumbnail}
                  />
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeContainer;
