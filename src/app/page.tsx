import { AppLayout } from "@/layout/app-layout";
import RootLayout from "./layout";

export default function Page() {
  return (
    <AppLayout pageTitle="hi">
      <div>App Page - {process.env.NEXT_PUBLIC_WEB_DOMAIN as string}</div>
    </AppLayout>
  );
}
