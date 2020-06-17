import * as React from "react";

export interface IWhenProps {
  predicate?: boolean;
}

const When: React.FC<IWhenProps> = ({ children, predicate }) => {
  return !predicate ? <></> : <>{children}</>;
};

export { When };
