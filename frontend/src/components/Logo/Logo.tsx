import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

import logo from "../../assets/images/logo.png";

interface LogoProps {
  variant?: "md" | "sm";
}

const Logo = ({ children, variant = "md" }: PropsWithChildren<LogoProps>) => {
  return (
    <Link to="/" className={styles[`container-${variant}`]}>
      <img src={logo} alt="ClinVix logo" />
      <div>{children}</div>
    </Link>
  );
};

export default Logo;
