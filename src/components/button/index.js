import { StyledButton } from "@/components/button/style";

const Button = ({ text, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
