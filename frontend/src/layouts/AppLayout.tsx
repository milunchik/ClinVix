import { PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";

interface AppLayoutProps {
  hasFooter?: boolean;
}

const AppLayout = ({
  hasFooter = true,
  children,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
