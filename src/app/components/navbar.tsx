import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[#F2DEC7] p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}