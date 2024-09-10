import { NavLink } from "react-router-dom";

import {
  adminLinks,
  commonLinks,
  doctorLinks,
  guestLinks,
  userLinks,
} from "../../constants";
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

  let navLinks: TNavLink[] = commonLinks;

  if (isAuth) {
    if (role === "user") {
      navLinks = [...navLinks, ...userLinks];
    }

    if (role === "doctor") {
      // temp
      const doctorId = "1";
      //
      navLinks = [
        ...navLinks,
        ...doctorLinks,
        { path: `/profile/${doctorId}`, label: "Profile" },
      ];
    }

    if (role === "admin") {
      navLinks = [...navLinks, ...adminLinks];
    }
  } else {
    navLinks = [...navLinks, ...guestLinks];
  }

  return (
    <nav className={styles[`navbar-${align}`]}>
      <ul
        className={`${styles[`navList-${variant}`]} ${
          styles[`navList-${direction}`]
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={link.path}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
