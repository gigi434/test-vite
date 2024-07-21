import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";

import { createRouter } from "@/src/app/routes";
import { AppProvider } from "@/src/provider";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />;
};

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
