import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ToastContainer } from "react-toastify";
// import { Toaster } from 'react-hot-toast'; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <Toaster position="top-right" reverseOrder={false}/> */}
        <ToastContainer position="top-right"/>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
