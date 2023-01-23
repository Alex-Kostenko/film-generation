import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid black;
  cursor: pointer;
  overflow: auto;
  background-color: white;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const Img = styled.img`
  width: 25%;
  height: 100%;
`;

export const Info = styled.div`
  margin-left: 20px;
`;

export const Text = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

export const Title = styled.h2`
  margin-top: 10px;
`;
