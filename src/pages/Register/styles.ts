import styled from "styled-components";
import { Card } from "antd";
import { devices } from "@app/constants/sizes";

export const RegisterBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eee;
  @media ${devices.mobile} {
    padding: 24px;
  }
`;

export const RegisterContainer = styled(Card)`
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
