import { PropsWithChildren } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Wrapper from "../Wrapper/Wrapper";

interface AppLayoutProps {
  hasFooter?: boolean;
}

const AppLayout = ({
  hasFooter = true,
  children,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <div>
      <Sidebar>
        <Header />
        <Sidebar.Menu />
      </Sidebar>
      <Wrapper>
        {children}
        {hasFooter && <Footer />}
      </Wrapper>
    </div>
  );
};

export default AppLayout;
