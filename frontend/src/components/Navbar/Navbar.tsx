import styles from "./Navbar.module.scss";

interface NavbarProps {
  align: "left" | "center" | "right";
}

const Navbar = ({ align }: NavbarProps) => {
  const navLinks = Array.from({ length: 6 }, (_, index) => (
    <li key={index + "key"}>
      <a href="/">Link {index + 1}</a>
    </li>
  ));

  return (
    <nav className={styles[`navbar-${align}`]}>
      <ul className={styles.navList}>{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
