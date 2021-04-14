import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {Button, Card, Carousel, Checkbox, Form, Input, Row, Col, Image} from "antd";
import Colors from "../../Design/Colors";
import {Link} from "react-router-dom";
import {Management} from "../../Logic/Management";
import {Database} from "../../Logic/Database";
import Bg1 from "../../Img/bg1.png";
import Bg2 from "../../Img/bg2.png";
import Bg3 from "../../Img/bg3.png";
import Bg4 from "../../Img/bg4.png";
import Bg5 from "../../Img/bg5.png";

// const AgentTest = {
//     id: 1,
//     name: "David",
//     type: "Agent",
//     username: "David123",
//     password: "123",
// }


async function loginUser(credentials, management){
    // return fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())
    // if ((credentials.username === AgentTest.username)&&(credentials.password === AgentTest.password)) {
    //     return {
    //         'token': AgentTest.id
    //     };
    // }
    console.log(credentials.username);
    let isAuthenticID = Database.AuthenticateUser(credentials.username, credentials.password, management);
    console.log(isAuthenticID);
    if (isAuthenticID){
        return{
            'token': isAuthenticID
        }
    }
}


export default function Login({setToken, manageHook}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    // const handleSubmit = async (values) => {
    //     // values.preventDefault();
    //     const result = await loginUser({'username': username, 'password': password});
    //     setToken(result.token);
    // }


    const handleSubmit = async e => {
        // e.preventDefault();
        console.log("Hi");
        const token = await loginUser({
          'username': username,
          'password': password
        }, manageHook.management);
        console.log(`Username: ${username} , Password: ${password}`);
        setToken(token.token);
      }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const CarouselStyle = {
        height: window.innerHeight-10,
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }

    const wrapperStyle = {
        height: window.innerHeight - 10,
    }

    const colStyle = {
        width: "100%",
        height: "100%",
    }

    const colorStyles = {
        white: Colors.white,
        grey: Colors.lightgrey
    }

    return(
        <div>
            <div className="login-wrapper" style={wrapperStyle}>
                <Row style={colStyle}>
                    <Col style={colStyle} span={12}>
                        <Col style={colStyle} span={16} offset={4}>
                            <div className="login-card-wrapper" style={{backgroundColor: colorStyles.white}}>
                            <Card className="login-card" style={{width: "100%", borderColor: colorStyles.white}}>
                                {/*<Form*/}
                                {/*    name="basic"*/}
                                {/*    initialValues={{*/}
                                {/*        remember: true,*/}
                                {/*    }}*/}
                                {/*    onFinish={handleSubmit}*/}
                                {/*    onFinishFailed={onFinishFailed}>*/}
                                {/*        <Form.Item*/}
                                {/*        label="Username"*/}
                                {/*        name="username"*/}
                                {/*        rules={[*/}
                                {/*            {*/}
                                {/*                required: true,*/}
                                {/*                message: 'Please input your username',*/}
                                {/*            }*/}
                                {/*        ]}>*/}
                                {/*            <Input onChange={e => setUserName(e.target.value)} />*/}
                                {/*        </Form.Item>*/}
                                {/*        <Form.Item*/}
                                {/*        label="Password"*/}
                                {/*        name="password"*/}
                                {/*        rules={[*/}
                                {/*            {*/}
                                {/*                required: true,*/}
                                {/*                message: 'Please input your password',*/}
                                {/*            }*/}
                                {/*        ]}*/}
                                {/*        >*/}
                                {/*            <Input.Password onChange={e => setPassword(e.target.value)} />*/}
                                {/*        </Form.Item>*/}
                                {/*        <Form.Item  name="remember" valuePropName="checked">*/}
                                {/*            <Checkbox>Remember Me</Checkbox>*/}
                                {/*        </Form.Item>*/}
                                {/*        <Form.Item>*/}
                                {/*            <Button type="primary" htmlType="submit">*/}
                                {/*                Submit*/}
                                {/*            </Button>*/}
                                {/*        </Form.Item>*/}
                                {/*</Form>*/}
                                <form onSubmit={handleSubmit}>
                                    <label>
                                      <p>Username</p>
                                      <input type="text" onChange={e => setUserName(e.target.value)} />
                                    </label>
                                    <label>
                                      <p>Password</p>
                                      <input type="password" onChange={e => setPassword(e.target.value)} />
                                    </label>
                                    <div>
                                      <button type="submit">Submit</button>
                                    </div>
                                  </form>
                                {/*<Link to={"/dashboard"}>Go to Next Page</Link>*/}
                                <Link to={"/registration"}>Sign Up</Link>
                            </Card>
                            </div>
                        </Col>
                    </Col>
                    <Col style={colStyle} span={12}>
                        <div className="login-header-wrapper">
                            <div className="login-header" style={{color: colorStyles.white}}>
                                Technology in Good Health
                            </div>
                            <div className="login-content" style={{color: colorStyles.grey}}>
                                Order your food on the move <br />
                                <span style={{fontSize: "1.2rem"}}>Or <Link to={"/registration/restaurant"}>Join Us</Link></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Carousel autoplay>
                <div>
                    <Image src={Bg1} />
                </div>
                <div>
                    <Image src={Bg2} />
                </div>
                <div>
                    <Image src={Bg4} />
                </div>
            </Carousel>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}