import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { Button } from 'antd';
import axios from 'axios';

const Users = (props) => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const handleAddUser = () => {
        navigate("/users/addUser");
    };
    useEffect(() => {
        axios.get(`http://localhost:4000/users`)
          .then(function (response) {
            // handle success
            setData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
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
            <h2>{props.title}</h2>
            {/* <NavLink to="/admin/users/addUser"><button className="button" onClick={handleAddUser}>Add User</button></NavLink> */}
            {/* <button className="button" onClick={handleAddUser}>Add User</button> */}
            <br></br>
            <Button type="primary" onClick={handleAddUser}>Add User</Button>
            <br></br>
            {/* <table style={{ width: "100%", borderCollapse: "collapse" }} name="users">
                <thead>
                    <UserHeader />
                </thead>
                <tbody>
                    {data.map((item) => (<UsersRow row={item} />))}
                </tbody>
            </table> */}
            <Table dataSource={data} columns={columns} />;
        </div>
    );
}

export default Users;