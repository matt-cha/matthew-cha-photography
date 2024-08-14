import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex space-x-4">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
