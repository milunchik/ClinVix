import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header>
      Header
      {children}
    </header>
  );
};

export default Header;
