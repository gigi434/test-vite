import { ShadcnThemeProvider } from "@/src/provider/theme/shadui-cn";
import type React from "react";

type AppProvider = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProvider) {
  return (
    <ShadcnThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ShadcnThemeProvider>
  );
}
