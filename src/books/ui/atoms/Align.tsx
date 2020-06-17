import styled from "styled-components";

export enum AlignItemValue {
  Start,
  End,
  Center,
}

export enum JustifyValue {
  Center,
  End,
  Start,
}

export interface IAlignProps {
  alignItems?: AlignItemValue;
  justify?: JustifyValue;
}

function alignItems(align: AlignItemValue = AlignItemValue.Start) {
  if (align === AlignItemValue.Center) {
    return "center";
  }

  if (align === AlignItemValue.End) {
    return "end";
  }

  return "start";
}

function justifyContent(justify: JustifyValue = JustifyValue.Start) {
  if (justify === JustifyValue.Center) {
    return "center";
  }

  if (justify === JustifyValue.End) {
    return "end";
  }

  return "start";
}

const Align = styled.div<IAlignProps>`
  align-content: center;
  align-items: ${(props) => alignItems(props.alignItems)};
  display: flex;
  justify-content: ${(props) => justifyContent(props.justify)};
`;

export { Align };
