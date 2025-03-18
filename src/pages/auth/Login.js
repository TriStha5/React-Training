// import React, {useState} from "react";
import React from 'react';
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input } from 'antd';


const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        if (values.username === 'admin' && values.password === 'admin'){
            alert('Login Successful');
            console.log('Success:', values);
            localStorage.setItem('is_Login', 1);
            navigate('/users');
        }
        else{
            alert('Login Unsuccessful');
            console.log('Unsuccess:', values);
            localStorage.setItem('is_Login', 0);
            
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        localStorage.setItem('is_Login', 0);
    };
    // const navigate = useNavigate();
    // const [user, setUser] = useState({
    //     username: "",
    //     password: ""
    // });
    // const [message, setMessage] = useState('');
    // const handleUserNameChange = (e) => {
    //     setUser({...user, username: e.target.value});
    // }
    // const handlePasswordChange = (e) => {
    //     setUser({...user, password: e.target.value});
    // }
    // const handleLogin = () => {
    //     if (user.username === 'admin' && user.password === 'admin'){
    //         alert('Login Successful');
    //         localStorage.setItem('is_Login', 1);
    //         navigate('/users');
    //     }
    //     else{
    //         localStorage.setItem('is_Login', 0);
    //         setMessage('Invalid username or password');
            
    //     }
    //     console.log(user);
    // }
    return(
        <div className="login-body">
            {/* <div className="login-container">
            <h2>Login</h2>
            <span style={{color: "red"}}>{message}</span>
            <input type="text" id="username" placeholder="Username" value={user.username} onChange={handleUserNameChange} required />
            <input type="password" id="password" placeholder="Password" value={user.password} onChange={handlePasswordChange} required />
            <button onClick={handleLogin}>Login</button>
            </div> */}
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            </Form>
            
        </div>
    )
}

export default Login;