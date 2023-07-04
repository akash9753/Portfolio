import React,{useState} from 'react'
import "../signup/Signup";
import { Form, Input, Button, message } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from '../../components/loader/Loader';



const Signin = () => {
  const navigate = useNavigate();
  const [Loading,setLoading] = useState(false)
  const onFinishHandler = async (values) => {
    try{
      setLoading(true)
     const res = await axios.post("https://dnaooserver.onrender.com/api/v1/user/signin",values)
     if(res.data.success){
      setLoading(false)
      localStorage.setItem("token",res.data.token)
      message.success("signin successfully")
      navigate("/PortfolioHome")
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
    {Loading === true ? <Loader/> : <div className="container_signup">
    <div className="parent">
      <h1>Dnaoo Signin</h1>
      <div className="signup_form">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input type="password" required />
          </Form.Item>

          <div>
            <Link to="/signup">Not a use signup here</Link>
          </div>
          <div>
          <Button type="primary" htmlType="submit">
          Signin
        </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>}
      
    </>
  )
}

export default Signin