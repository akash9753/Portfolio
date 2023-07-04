import React from "react";
import "./signup.css";
import { Form, Input, Button, message } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try{
     const res = await axios.post("/api/v1/user/signup",values)
     if(res.data.success){
      message.success("signup successfully")
      navigate("/")
     }else{
      message.error(res.data.message);
     }
    }catch(error){
     console.log(error);
     message.error("Something Went Wrong")
    }
  };

  return (
    <>
      <div className="container_signup">
        <div className="parent">
          <h1>Dnaoo Signup</h1>
          <div className="signup_form">
            <Form layout="vertical" onFinish={onFinishHandler}>
              <Form.Item label="Name" name="name">
                <Input type="text" required />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="password" name="password">
                <Input type="password" required />
              </Form.Item>

              <div>
                <Link to="/">Already user signin here</Link>
              </div>
              <div>
              <Button type="primary" htmlType="submit">
              Signup
            </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
