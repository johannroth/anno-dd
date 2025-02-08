import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { ReactNode } from "react";

export default function Header() {
  return (
    <header className="mt-2 w-full">
      <div className=" mx-auto max-w-6xl sm:px-6 relative flex h-30 items-center justify-between gap-3 rounded-2xl bg-main-dark px-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <ul className="flex flex-1 items-center justify-end gap-3">
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
