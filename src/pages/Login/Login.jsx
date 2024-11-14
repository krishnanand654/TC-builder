import { Button, Form, Input } from 'antd';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import Navbar from '../../Components/Navbar/Navbar';

const Login = () => {
    const [failed, setFailed] = useState(false);
    const [loading, setLoading] = useState(false);

    const nav = useNavigate();

    const onFinish = async(values) => {
        setLoading(true);

        await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, values, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            nav("/home");
            localStorage.setItem('token', response.data.token);
            setLoading(false);
        })
        .catch(error => {
            setFailed(true);
            console.error('Error creating PDF:', error);
        })
        .finally(()=>{
            setLoading(false)
        });

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setFailed(true);
    };
    return (
        <>
            {/* <Navbar /> */}
            <div className='login-ctn'>

                <div>

                    {failed ? <p className='failed'>Username or password is wrong</p> : null}
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

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >

                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" loading = {loading}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}
export default Login;