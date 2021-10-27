import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/accounts/accounts').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonRes => setUsers(jsonRes.data));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Created On</th>
                    <th>Owner</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) =>
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.created_on}</td>
                        <td>{user.owner}</td>
                        <td><Link to={`/accounts/accounts/${user._id}`}>View</Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}


export default Users;