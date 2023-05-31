import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";



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
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  const [error, setError] = useState(null)
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false)

  function onChange(value) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }


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
    if (response.status === 401) {
      const errorData = await response.json();
      setError(errorData.error); 
    } else {
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
    }else if (data.error) {
      setError(data.error);
    }
  }}

  return (
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
            {error && <p style={{color: "red"}}>{error}</p>} 
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
            <ReCAPTCHA style={{marginLeft : "25px", marginBottom: "10px"}} sitekey="6LfNi08mAAAAADTgBoQjGlIDzYo7KVr7gTDF7DFD" onChange={onChange} />
              <Button disabled={!isCaptchaSuccessful} type="primary" htmlType="submit">
                Login
              </Button>
             
              <p>Don't have an account?</p>
              <br /> <Link to={"/register"}>register now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
