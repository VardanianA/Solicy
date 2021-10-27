import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './edit.css';

const ViewAccount = () => {
  const [user, setTable] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`/accounts/accounts/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(jsonRes => setTable(jsonRes.data));
  }, [])

  return (
    user &&
    <table className="transpose">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Created On</th>
          <th>Update On</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{user.name}</td>
          <td>{user.owner}</td>
          <td>{user.created_on}</td>
          <td>{user.created_on}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ViewAccount;