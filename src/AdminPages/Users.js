import React from 'react'
import { Table , Space} from 'antd';
import { useState , useEffect } from 'react';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  
  
  return (
      <div className="table-container">
        <Space size={20}>
          <Table columns={[
            {title : "User Name",
             dataIndex: "userName"
            },
            {title : "First Name",
             dataIndex: "firstName"
            },
            {title : "Last Name",
             dataIndex: "lastName"
            },
            {title : "Email",
             dataIndex: "Email"
            },
            {title : "Role",
             dataIndex: "role"
            },
            {title : "Is verified",
             dataIndex: "is_verified"
            },
            {title : "Created Date",
             dataIndex: "createdAt"
            },
          ]}
          dataSource={users.map(user => ({ ...user, key: user.id }))}
          >
          </Table>
        </Space>
        </div>
  )
}

export default Users
