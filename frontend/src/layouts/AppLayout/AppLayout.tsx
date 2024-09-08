import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Wrapper from "../Wrapper/Wrapper";
import Spinner from "../../components/Spinner/Spinner";

interface AppLayoutProps {
  hasFooter?: boolean;
}

const AppLayout = ({ hasFooter = true }: AppLayoutProps) => {
  return (
    <div className="container">
      <Sidebar>
        <Header />
        <Sidebar.Menu />
      </Sidebar>
      <Wrapper>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Wrapper>
      {hasFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
