import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./Sidebar.module.scss";
import BurgerMenu from "../../assets/icons/BurgerMenu";
import CloseButton from "../../assets/icons/CloseButton";

interface SidebarValueProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface MenuProps {
  side?: "top" | "right" | "bottom" | "left";
}

const SidebarContext = createContext<SidebarValueProps | null>(null);

const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === null)
    throw new Error("SidebarContext was used outside SidebarPropvider");

  return context;
};

const Sidebar = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

const Menu = ({ children, side = "left" }: PropsWithChildren<MenuProps>) => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <aside
      className={`${styles.sidebar} ${styles[`sidebar-${side}`]} ${
        isOpen ? styles["open"] : ""
      }`}
    >
      <button className={styles.close} onClick={() => setIsOpen(false)}>
        <CloseButton />
      </button>
      <Navbar direction={side === "top" || side === "bottom" ? "row" : "col"} />
      {children}
    </aside>
  );
};

const ToggleButton = () => {
  const { setIsOpen } = useSidebar();

  return (
    <button className={styles.burger} onClick={() => setIsOpen(true)}>
      <BurgerMenu />
    </button>
  );
};

Sidebar.Menu = Menu;
Sidebar.ToggleButton = ToggleButton;

export default Sidebar;
