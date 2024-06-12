import { Outlet } from "react-router-dom";
import Loader from "./common/Loader";
import { useLoading } from "../../utils/providers/hooks";

const PageLayout = () => {
  const { isLoading } = useLoading();

  return (
    <div className="main-wrapper">
      {/* Navigation */}
      <Loader isLoading={isLoading}>
        <Outlet />
      </Loader>
      {/* Footer */}
    </div>
  );
};

export default PageLayout;
