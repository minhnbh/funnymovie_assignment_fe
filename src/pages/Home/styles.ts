import { devices } from "@app/constants/sizes";
import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px;
  @media ${devices.desktop} {
    padding: 0 2vw;
  }
  @media ${devices.large} {
    padding: 0 8vw;
  }
`;

export const MovieTitle = styled.h3`
  color: red;
`;

export const SharedBy = styled.h3``;

export const VoteContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Vote = styled.div`
  display: flex;
  gap: 4px;
`;

export const MovieInfoContainer = styled.div`
  height: 280px;
  overflow: hidden;
`;

export const ItemContainer = styled(Row)`
  margin: 24px 0;
`;

export const DetailContainer = styled.div`
  height: 70vh;
  overflow-y: auto;
`;
