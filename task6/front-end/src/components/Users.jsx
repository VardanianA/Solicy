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
            }
        }).then(jsonRes => setUsers(jsonRes.data));
    }, []);

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
                </Space>
            ),
        },
    ]
    return (
        <Table dataSource={users} columns={columns} >
        </Table>
    );
}


export default Users;
