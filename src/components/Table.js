import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Table() {
  const [list, setList] = useState([]);

  const api = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="form-outline">
        <input
          type="search"
          id="form1"
          class="form-control"
          placeholder="Search for Name Email Or Role"
          aria-label="Search"
        />
      </div>

      <table className="table table_margin">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((person) => (
            <tr key={person.id}>
              <th scope="row">
                <input type="checkbox" name="checkbox" id="checkbox" />
              </th>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.role}</td>
              <td>
                <button className="fas fa-user-edit edit_button_style"></button>
                <button className="fas fa-trash-alt delete_button_style"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
