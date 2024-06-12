/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingOverlayWrapper from "react-loading-overlay-ts";
import SpinnerIcon from "./SpinnerIcon";

const Loader = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: any;
}) => {
  return (
    <LoadingOverlayWrapper
      active={isLoading}
      spinner={<SpinnerIcon />}
      styles={{
        overlay: (base) => ({
          ...base,
          height: "100vh",
          position: "fixed",
          // background: "#eb4968",
        }),
      }}
    >
      {children}
    </LoadingOverlayWrapper>
  );
};
export default Loader;
