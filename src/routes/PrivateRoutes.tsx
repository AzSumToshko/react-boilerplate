import { Route, Routes } from "react-router";
import PageLayout from "../pages/layout/PageLayout";
import { Pages, Paths } from "../constants/Pages";
import { HomePage } from "../pages/HomePage/HomePage";
import { Page404 } from "../pages/404/Page404";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={Paths[Pages.home]} element={<HomePage />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
export default PrivateRoutes;
