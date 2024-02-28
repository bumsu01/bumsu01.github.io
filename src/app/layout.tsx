import { AppLayout } from "@/layout/app-layout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return <AppLayout pageTitle={"TITLE"}>App-Layout : {children}</AppLayout>;
  return <div>App-Layout : {children}</div>;
}
