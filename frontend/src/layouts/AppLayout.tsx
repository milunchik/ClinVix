import { PropsWithChildren } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

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
