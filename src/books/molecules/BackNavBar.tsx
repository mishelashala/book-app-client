import * as React from "react";
import { NavBar } from "../atoms/NavBar";
import { Anchor } from "../atoms/Anchor";

export interface IBackNavBarProps {
  backTo: string;
}

const BackNavBar: React.FC<IBackNavBarProps> = ({ backTo }) => {
  return (
    <NavBar>
      <Anchor to={backTo}>Back</Anchor>
    </NavBar>
  );
};

export { BackNavBar };
