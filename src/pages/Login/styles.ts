import { devices } from "@app/constants/sizes";
import styled from "styled-components";
import { Card } from "antd";

export const LoginBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eee;
  @media ${devices.mobile} {
    padding: 24px;
  }
`;

export const LoginContainer = styled(Card)`
  width: 33%;
  min-width: 400px;
  & .ant-card-body {
    padding-top: 0;
    padding-bottom: 0;
  }
  @media ${devices.mobile} {
    width: 100%;
    min-width: auto;
  }
`;
