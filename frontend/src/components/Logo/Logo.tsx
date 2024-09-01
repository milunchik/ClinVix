import { PropsWithChildren } from "react";

import styles from "./Logo.module.scss";

import logo from "../../assets/images/logo.png";

interface LogoProps {
  variant?: "md" | "sm";
}

const Logo = ({ children, variant = "md" }: PropsWithChildren<LogoProps>) => {
  return (
    <a href="/" className={styles[`container-${variant}`]}>
      <img src={logo} alt="ClinVix logo" />
      <div>{children}</div>
    </a>
  );
};

export default Logo;
