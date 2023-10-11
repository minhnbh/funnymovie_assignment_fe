import React from "react";
import { Layout, Button } from "antd";
import { AppName, HeaderLeft, HeaderRight, HeaderWrapper } from "./styles";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  getAuthUser,
  removeAccessToken,
  removeAuthUser,
} from "@utils/authStorage";

const Header: React.FC = () => {
  const authUser = getAuthUser();

  const onSignOut = () => {
    removeAuthUser();
    removeAccessToken();
    window.location.href = "/login";
  };

  return (
    <Layout.Header>
      <HeaderWrapper>
        <HeaderLeft to="/">
          <HomeOutlined style={{ fontSize: "28px" }} />
          <AppName>Funny Movies</AppName>
        </HeaderLeft>
        <HeaderRight>
          Welcome<b>{authUser.fullName}</b>
          <Link to="/share">
            <Button type="primary">Share a movie</Button>
          </Link>
          <Button onClick={onSignOut} type="link">
            Logout
          </Button>
        </HeaderRight>
      </HeaderWrapper>
    </Layout.Header>
  );
};

export default Header;
