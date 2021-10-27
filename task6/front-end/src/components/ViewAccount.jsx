import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './edit.css';

const ViewAccount = () => {
  const [user, setTable] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/accounts/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(jsonRes => setTable(jsonRes.data));
  }, [])

  const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        key: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner'
    },
    {
        title: 'Created On',
        dataIndex: 'created_on',
        key: 'created_on'
    },
    {
      title: 'Update On',
      dataIndex: 'created_on',
      key: 'created_on'
  },
]

  return (
    user &&
    <Table dataSource={[user]} columns={columns} >
    </Table>
  );
}

export default ViewAccount;
