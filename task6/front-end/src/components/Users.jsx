import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import axios from 'axios';


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/accounts').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonRes => setUsers(jsonRes.data));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`/accounts/delete/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    window.location.reload()
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };


    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'fdsg'
        },
        {
            title: 'Created On',
            dataIndex: 'created_on',
            key: 'sfgg'
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'dfh'
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
    ]
    return (
        users &&
        <Table dataSource={users} columns={columns} >
        </Table>
    );
}


export default Users;
