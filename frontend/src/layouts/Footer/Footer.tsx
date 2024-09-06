import Icon from "../../components/Icon/Icon";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Footer.module.scss";

import Mail from "../../assets/icons/Mail";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Logo variant="sm">
          <p>Health Care</p>
          <p>Media Center</p>
        </Logo>
        <div>
          <p>Adress</p>
          <p>Number</p>
          <p>hospital@gmail.com</p>
        </div>
      </div>
      <Navbar />
      <div className={styles.mailBox}>
        <Input type="text" />
        <Icon>
          <Mail />
        </Icon>
      </div>
    </footer>
  );
};

export default Footer;
