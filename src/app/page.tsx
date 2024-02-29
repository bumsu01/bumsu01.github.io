import RootLayout from "./layout";

export default function Page() {
  return <div>App Page - {process.env.NEXT_PUBLIC_WEB_DOMAIN as string}</div>;
}
