import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 shadow">
      <nav className="container flex px-2 py-2 gap-5 ">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
