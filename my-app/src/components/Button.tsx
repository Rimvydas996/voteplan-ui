import React from "react";

interface ButtonProps {
  buttonText: string;
}

const Button: React.FC<ButtonProps & { onClick?: () => void }> = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

export default Button;
