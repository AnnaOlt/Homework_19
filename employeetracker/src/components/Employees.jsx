import React, { Component } from "react";

function Employees(props) {
  return (
    <tr>
      <th className="data-column" scope="row">
        {props.title}
      </th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>
        <img src={props.image}></img>
      </td>
    </tr>
  );
}

export default Employees;
