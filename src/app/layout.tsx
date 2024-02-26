import { AppLayout } from "@/layout/app-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout pageTitle={"TITLE"}>PAGE-L : {children}</AppLayout>
      </body>
    </html>
  );
}
