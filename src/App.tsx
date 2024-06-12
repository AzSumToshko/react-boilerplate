import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import PrivateRoutes from "./routes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { initializeUser } from "./utils/providers/slices/authSlice";
import { AppDispatch } from "./utils/providers/store";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <PrivateRoutes />
        <Toaster />
      </>
    </I18nextProvider>
  );
};

export default App;
