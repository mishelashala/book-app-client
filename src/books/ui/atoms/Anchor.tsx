import styled from "styled-components";
import * as colors from "../styles/base/colors";
import { Link } from "react-router-dom";

const Anchor = styled(Link)`
  color: ${colors.WHITE};
  font-family: arial;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export { Anchor };
