import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" aria-label="Hem">
      <div className="relative flex justify-center items-center">
        <Image src="/logo.png" alt="anima nordica" width={235} height={87} priority unoptimized className="shrink-0" />
        <div className="absolute bottom-[-5px] tracking-[0.4em] text-[16px] text-white">KAMMARKÖR</div>
      </div>
    </Link>
  );
}
