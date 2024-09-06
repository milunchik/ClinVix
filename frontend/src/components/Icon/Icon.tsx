import { PropsWithChildren } from "react";

import styles from "./Icon.module.scss";

interface IconProps {
  variant?: "primary" | "secondary";
  rounded?: true;
  onClick?: () => void;
}

const Icon = ({
  variant = "primary",
  rounded,
  onClick,
  children,
}: PropsWithChildren<IconProps>) => {
  return (
    <div
      onClick={onClick}
      className={`${styles["icon-" + variant]} ${
        rounded ? styles["icon-rounded"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Icon;
