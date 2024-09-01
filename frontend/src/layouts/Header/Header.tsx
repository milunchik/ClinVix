import { PropsWithChildren } from "react";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header
      className={children ? styles["header-with-content"] : styles["header"]}
    >
      <Logo>ClinVix</Logo>
      <Navbar variant="decorated" align={children ? "right" : "center"} />
      {children}
    </header>
  );
};

export default Header;
