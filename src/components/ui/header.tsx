import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { ReactNode } from "react";

export default function Header() {
  return (
    <header className="mt-2 w-full">
      <div className="mx-auto max-w-6xl sm:px-6 h-35 md:h-28 pt-2 pb-2 items-center rounded-2xl bg-main-dark px-5 flex max-md:flex-col justify-between w-full">
        <div className="flex items-center justify-center md:justify-start">
          <Logo />
        </div>
        <ul className="flex items-center max-md:justify-center md:justify-end gap-2">
          <NavLink href="/">Hem</NavLink>
          <NavLink href="/test">Test</NavLink>
          <NavLink href="/konzerte">Konzerte</NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </ul>
      </div>
    </header>
  );
}

function NavLink(props: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={props.href}
        className={`text-gray-700 text-lg px-4 py-3 rounded-md hover:bg-main-light hover:text-gray-600 ${pathname === props.href ? "underline underline-offset-4" : ""}`}
      >
        {props.children}
      </Link>
    </li>
  );
}
