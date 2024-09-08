import { adminLinks } from "../../constans/routes/adminRoutes";
import { userLinks } from "../../constans/routes/userRoutes";
import { TNavLink } from "../../types";
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
  // temp
  const isAuth = true;
  // eslint-disable-next-line prefer-const
  let role = "doctor";
  //

  let navLinks: TNavLink[] = [];

  if (isAuth) {
    if (role === "user") {
      navLinks = [...userLinks];
    }

    if (role === "doctor") {
      // temp
      const doctorId = "1";
      //
      navLinks = [
        ...userLinks,
        { path: `/profile/${doctorId}`, label: "Profile" },
      ];
    }

    if (role === "admin") {
      navLinks = [...userLinks, ...adminLinks];
    }
  } else return;

  return (
    <nav className={styles[`navbar-${align}`]}>
      <ul
        className={`${styles[`navList-${variant}`]} ${
          styles[`navList-${direction}`]
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
