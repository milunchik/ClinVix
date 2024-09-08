import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Wrapper from "../Wrapper/Wrapper";

interface AppLayoutProps {
  hasFooter?: boolean;
}

const AppLayout = ({
  hasFooter = true,
}: AppLayoutProps) => {
  return (
    <div>
      <Sidebar>
        <Header />
        <Sidebar.Menu />
      </Sidebar>
      <Wrapper>
        <Outlet />
        {hasFooter && <Footer />}
      </Wrapper>
    </div>
  );
};

export default AppLayout;
