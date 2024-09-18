import type { Metadata } from "next";
import "./globals.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import InstallBootstrapJs from "@/components/config/BootstrapJs";
import AuthProvider from "./context/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <InstallBootstrapJs />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
