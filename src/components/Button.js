import styled from "styled-components";

export const Button = styled.button`
   {
    width: 200px;
    height: 50px;
    background: #2f3237;
    color: #fff;
    border: none;
    transition: all 0.3s;

    &:hover {
      background: #959dab;
      font-weight: bold;
    }
    &:active {
      background: #2b254e;
    }
  }
`;
