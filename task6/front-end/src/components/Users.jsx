import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Table, Space } from 'antd';
import 'antd/dist/antd.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/accounts').then(res => {
            if (res.ok) {
                return res.json();
            };
        }).then(jsonRes => setUsers(jsonRes.data));
    }, []);

    const deleteUser = (id) => {
        fetch(`/accounts/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 200) {
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Created On',
            dataIndex: 'created_on'
        },
        {
            title: 'Owner',
            dataIndex: 'owner'
        },
        {
            title: 'Action',
            key: 'action',
            render: (user) => (
                <Space size="middle">
                    <Link to={`/accounts/${user._id}`}>View Full Info</Link>
                    <button onClick={() => { deleteUser(user._id) }} size="sm" variant="danger">Delete</button>
                </Space>
            ),
        },
    ];

    return (
        users &&
        <Table dataSource={users} columns={columns} />
    );
}

export default Users;
