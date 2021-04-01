import styled from "styled-components";

const buttonBackground = (color) => {
  switch (color) {
    case "pending":
      return "yellow";
    case "approved":
      return "lightgreen";
    case "denied":
      return "red";
  }
};

const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  font-size: 20px;
  color: ${(props) => props?.color || "#fff"};
  background-color: ${({ status }) => buttonBackground(status)};

  &:hover {
    cursor: pointer;
  }
`;

export { StyledButton };
