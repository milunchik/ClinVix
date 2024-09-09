import { lazy, Suspense } from "react";

import Spinner from "../../components/Spinner/Spinner";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Home = lazy(() => import("../../pages/Home/Home"));

const HomeLayout = () => {
  return (
    <div className="container">
      <Sidebar>
        <Header>
          <span style={{ justifySelf: "end" }}>Button</span>
        </Header>
        <Sidebar.Menu />
      </Sidebar>
      <Wrapper>
        <Suspense
          fallback={
            <div className="container">
              <Spinner />
            </div>
          }
        >
          <Home />
        </Suspense>
      </Wrapper>
    </div>
  );
};

export default HomeLayout;
