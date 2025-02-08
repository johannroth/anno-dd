import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute top-2 w-full ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-30 items-center justify-between gap-3 rounded-2xl bg-header-dark/80 px-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link href="/">Hem</Link>
            </li>
            <li>
              <Link href="/test">test</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
