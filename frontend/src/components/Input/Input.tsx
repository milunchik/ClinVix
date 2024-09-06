import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: true;
}

const Input = ({ rounded, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={rounded ? styles["input-rounded"] : styles.input}
    />
  );
};

export default Input;
