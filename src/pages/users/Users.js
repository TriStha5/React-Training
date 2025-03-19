import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Space, Table, Button, Card } from 'antd';
 import { getUsers } from "../../utils/user.util";

const Users = (props) => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const handleAddUser = () => {
        navigate("/users/addUser");
    };
    useEffect(() => {
      getUsers().then((response) => {
        setData(response);
      });
    }, []);
    const columns = [
        // {
        //   title: 'ID',
        //   dataIndex: 'id',
        //   key: 'id',
        //   render: (text) => <a>{text}</a>,
        // },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (_, item) => <NavLink to={`/user/details/${item.id}`}>{item.name}</NavLink>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <NavLink to={`/users/edit/${record.id}`}>Edit</NavLink>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
    return (
        <div>
            <Card
              style={{
                marginTop: 16,
              }}
              type="inner"
              title={<h1>{props.title}</h1>}
              extra={<Button type="primary" onClick={handleAddUser}>Add User</Button>}
            >
              <Table columns={columns} dataSource={data} />
            </Card>
        </div>
    );
}

export default Users;