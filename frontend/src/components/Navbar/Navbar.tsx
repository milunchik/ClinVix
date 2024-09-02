import styles from "./Navbar.module.scss";

interface NavbarProps {
  align?: "left" | "center" | "right";
  variant?: "base" | "decorated";
  direction?: "col" | "row";
}

const Navbar = ({
  align = "center",
  variant = "base",
  direction = "row",
}: NavbarProps) => {
  const navLinks = Array.from({ length: 6 }, (_, index) => (
    <li key={index + "key"}>
      <a href="/">Link {index + 1}</a>
    </li>
  ));

  return (
    <nav className={styles[`navbar-${align}`]}>
      <ul
        className={`${styles[`navList-${variant}`]} ${
          styles[`navList-${direction}`]
        }`}
      >
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
