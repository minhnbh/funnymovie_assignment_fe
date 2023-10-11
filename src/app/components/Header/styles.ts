import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const HeaderLeft = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;
  color: white;
`;

export const AppName = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const HeaderRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;
`;
