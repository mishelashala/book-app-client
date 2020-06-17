import styled from "styled-components";

export enum AlignAxis {
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
}

export interface IAlignProps {
  alignItems?: AlignAxis;
  justify?: AlignAxis;
}

const Align = styled.div<IAlignProps>`
  align-content: center;
  align-items: ${({ alignItems = AlignAxis.Start }) => alignItems};
  display: flex;
  justify-content: ${({ justify = AlignAxis.Start }) => justify};
`;

export { Align };
