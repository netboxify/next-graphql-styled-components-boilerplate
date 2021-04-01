import { StyledButton } from "@/components/button/style";

const Button = ({ text, status, onClick, ...props }) => {
  return (
    <StyledButton status={status} onClick={onClick} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
