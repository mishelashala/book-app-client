import styled from "styled-components";
import * as colors from "../styles/base/colors";

export enum ButtonVariant {
  Primary,
  Secondary,
}

interface IButtonProps {
  variant?: ButtonVariant;
}

function backgroundColor(variant: ButtonVariant = ButtonVariant.Primary) {
  if (variant === ButtonVariant.Secondary) {
    return "#0f0f0f";
  }

  return colors.PRIMARY_BLUE;
}

const Button = styled.button<IButtonProps>`
  background-color: ${(props) => backgroundColor(props.variant)};
  border: none;
  box-sizing: border-box;
  color: ${colors.WHITE};
  font-family: "arial";
  padding: 0.5rem 1rem;
`;

export { Button };
