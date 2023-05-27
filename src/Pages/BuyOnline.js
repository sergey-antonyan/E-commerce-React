import React from "react";
import '../Pages/buyOnline.css'
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Register from "./Register";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrRegistererCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrRegistererCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const BuyOnline = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  async function submitLogin(value) {
    console.log(value);
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
        Authorization: token,
      },
    });

    const data = await response.json();
    localStorage.setItem("jwt", data.jwt);
    localStorage.setItem("userName", data.userName);

    if (data.status === "Logged in" && data.role === 1) {
      console.log(123);
      navigate("/admin");
    } else if (
      data.status === "Logged in" &&
      data.role === 0 &&
      data.is_verified === 1
    ) {
      navigate("/");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="buyOnlineCont">
        
        <div>
          <div className="registerCont">
            <div className="registerChild">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={submitLogin}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "86",
                }}
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
              >
                <h1>Login</h1>
                <Form.Item
                  name="Email"
                  label="E-mail"
                  rules={[
                    {
                      required: true,
                      message: "Please input your E-mail!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Form.Item valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button  htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className='registerCont'>
        <div className="buyOnlineReg">
          <h1>New Customer</h1>
          <div>
            <h3>
              You are a new customer and want to order? 
            </h3>
            <br/>
            <h3>Click on the following
              button to register.</h3>
              <br/>
            <Register/>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOnline;
