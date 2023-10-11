import React from "react";
import { Layout, Button, Menu } from "antd";
import {
  AppName,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  MobileHeaderRight,
} from "./styles";
import { HomeOutlined } from "@ant-design/icons";
import { Link, redirect } from "react-router-dom";
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
        {/* <MobileHeaderRight>
          <Menu
            items={[
              {
                key: "share",
                title: "Share a movie",
              },
              {
                key: "logout",
                title: "Logout",
              },
            ]}
            onClick={(e) => {
              if (e.key === "share") {
                redirect("/share");
              } else if (e.key === "logout") {
                onSignOut();
              }
            }}
          />
        </MobileHeaderRight> */}
      </HeaderWrapper>
    </Layout.Header>
  );
};

export default Header;
