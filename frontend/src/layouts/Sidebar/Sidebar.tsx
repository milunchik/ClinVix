import { PropsWithChildren } from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  side?: "top" | "right" | "bottom" | "left";
}

const Sidebar = ({
  children,
  side = "left",
}: PropsWithChildren<SidebarProps>) => {
  return (
    <aside className={`${styles.sidebar} ${styles[`sidebar-${side}`]}`}>
      <Logo>ClinVix</Logo>
      <Navbar direction={side === "top" || side === "bottom" ? "row" : "col"} />
      {children}
    </aside>
  );
};

export default Sidebar;
