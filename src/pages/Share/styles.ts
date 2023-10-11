import { Card, Form } from "antd";
import { devices } from "@app/constants/sizes";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.mobile} {
    padding: 24px;
  }
`;

export const ShareCard = styled(Card)`
  width: 40%;
  margin-top: 20vh;
  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const ShareForm = styled(Form)`
  margin-top: 24px;
`;
