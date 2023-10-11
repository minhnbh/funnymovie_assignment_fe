import React, { useState } from "react";
import { Button, Form, Input, Typography, Col, Row, notification } from "antd";
import { LoginBackground, LoginContainer } from "./styles";
import { Link } from "react-router-dom";
import { AuthServices } from "@services/auth.service";
import { setAccessToken, setAuthUser } from "@utils/authStorage";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { status, data } = await AuthServices.login({ email, password });
      if (status !== 200) throw new Error();
      setAuthUser(data.user);
      setAccessToken(data.token);
      notification.success({ message: "Welcome to FunnyMovie" });
      window.location.href = "/";
    } catch (error: any) {
      notification.error({ message: "Invalid email or password" });
    }
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <Form layout="vertical">
          <Typography.Title>Login</Typography.Title>
          <Form.Item label="Email" required tooltip="This is a required field">
            <Input
              value={email}
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            required
            tooltip="This is a required field"
          >
            <Input
              type="password"
              value={password}
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Row>
            <Col flex={1}>
              <Link to="/register">
                <Button size="large" type="link">
                  Register
                </Button>
              </Link>
            </Col>
            <Col flex={1}>
              <Form.Item style={{ float: "right" }}>
                <Button size="large" type="primary" onClick={handleLogin}>
                  Login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </LoginContainer>
    </LoginBackground>
  );
};

export default Login;
