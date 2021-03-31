import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  background-color: ${(props) => props?.background || "#ccc"};
  font-size: 20px;
  color: ${(props) => props?.color || "#fff"};

  &:hover {
    cursor: pointer;
  }
`;
